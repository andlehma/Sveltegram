<script>
  import Identicon from "identicon.js";
  import { posts, username } from "./stores.js";
  import { slide } from "svelte/transition";

  // identity
  let imgSize = 50;
  let avatarFile = [];
  $: readAvatar(avatarFile[0]);

  let hash =
    (Math.random() * 1e16).toString(16) + (Math.random() * 1e16).toString(16);
  let data = new Identicon(hash, 100).toString();
  let avatarSrc = "data:image/png;base64," + data;

  function readAvatar(inputFile) {
    if (inputFile) {
      let src;
      let reader = new FileReader();
      reader.onload = function(e) {
        avatarSrc = e.target.result;
      };

      reader.readAsDataURL(inputFile);
    }
  }

  let editUsername = false;
  function toggleEditUsername() {
    editUsername = !editUsername;
  }

  // new post
  let postFile = [];
  let description;
  let postSrc;
  let showNewPost = false;

  function toggleNewPost() {
    postFile = [];
    description = "";
    postSrc = "";
    showNewPost = !showNewPost;
  }

  $: readPostImage(postFile[0]);

  function readPostImage(inputFile) {
    if (inputFile) {
      let src;
      let reader = new FileReader();
      reader.onload = function(e) {
        postSrc = e.target.result;
      };

      reader.readAsDataURL(inputFile);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    posts.update(n => [
      {
        avatar: avatarSrc,
        username: $username,
        imageSrc: postSrc,
        description: description,
        liked: false,
        comments: [],
      },
      ...n
    ]);

    toggleNewPost();
  }
</script>

<style>
  #avatar-container {
    position: relative;
    display: inline-block;
  }

  #avatar {
    display: inline-block;
    vertical-align: middle;
    height: var(--border-radius);
    width: var(--border-radius);
    object-fit: cover;
    border-radius: var(--border-radius);
  }

  #edit-avatar {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: white;
    background-color: black;
    border-radius: var(--border-radius);
    opacity: 0;
    transition: opacity 0.1s;
    user-select: none;
    cursor: pointer;
  }

  #avatar-container:hover #edit-avatar {
    opacity: 1;
  }

  h1 {
    display: inline;
    font-weight: normal;
    font-size: 22px;
  }

  #edit-username {
    opacity: 0;
    transition: opacity 0.1s;
  }

  h1:hover #edit-username {
    opacity: 1;
    cursor: pointer;
  }

  button {
    background-color: #98ff98;
  }

  #new-post-button {
    display: block;
    width: 100%;
    margin: 1em 0 0 0;
    cursor: pointer;
  }

  #new-post-form {
    margin-top: 8px;
  }

  #new-post-form * {
    min-width: 100%;
    max-width: 100%;
  }
</style>

<div id="user">
  <span id="identity">
    <label for="avatar-upload" id="avatar-container">
      <img
        id="avatar"
        src={avatarSrc}
        alt="avatar"
        style="--border-radius:{imgSize}px"
        width={imgSize} />
      <span id="edit-avatar" style="--border-radius:{imgSize}px">
        🖉
        <br />
        Edit
      </span>
      <input type="file" bind:files={avatarFile} id="avatar-upload" hidden />
    </label>
    <h1>
      {#if editUsername}
        <input type="text" size="10" bind:value={$username} />
        <button on:click={toggleEditUsername}>✓</button>
      {:else}
        {$username}
        <span id="edit-username" on:click={toggleEditUsername}>🖉</span>
      {/if}
    </h1>
  </span>

  <button on:click={toggleNewPost} id="new-post-button">
    {#if showNewPost}✕{:else}+ New Post{/if}
  </button>

  {#if showNewPost}
    <form
      transition:slide
      autocomplete="off"
      id="new-post-form"
      on:submit={handleSubmit}>
      <input
        required
        type="file"
        name="image"
        bind:files={postFile}
        id="post-upload" />
      {#if postSrc}
        <img src={postSrc} alt="post image preview" />
      {/if}
      <textarea
        placeholder="description"
        name="description"
        bind:value={description} />
      <input type="submit" value="Post" />
    </form>
  {/if}
</div>
