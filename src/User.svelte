<script>
  import Identicon from "identicon.js";
  let username = "Anonymous";
  let imgSize = 50;
  let avatarFile = [];
  $: readImage(avatarFile[0]);

  let hash =
    (Math.random() * 1e16).toString(16) + (Math.random() * 1e16).toString(16);
  let data = new Identicon(hash, 100).toString();
  let avatarSrc = "data:image/png;base64," + data;

  function readImage(inputFile) {
    if (inputFile) {
      let src;
      let reader = new FileReader();
      reader.onload = function(e) {
        src = e.target.result;
        avatarSrc = src;
      };

      reader.readAsDataURL(inputFile);
    }
  }

  let editUsername = false;
  function toggleEditUsername() {
    editUsername = !editUsername;
	}
	
	function newPost() {
		console.log("TODO");
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

	#new-post {
		display: block;
		width: 100%;
		margin: 1em 0 0 0;
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
        <input type="text" size="15" bind:value={username} />
				<button on:click={toggleEditUsername}>✓</button>
      {:else}
        {username}
        <span id="edit-username" on:click={toggleEditUsername}>🖉</span>
      {/if}
    </h1>
  </span>
	<button on:click={newPost} id="new-post">New Post</button>
</div>
