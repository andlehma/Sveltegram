<script>
  import { posts } from "./stores.js";
  import Icon from "fa-svelte";
  import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons/faHeart";
  import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons/faHeart";

  function toggleLike(i) {
    let newPosts = $posts;
    newPosts[i].liked = !newPosts[i].liked;
    posts.set(newPosts);
  }
</script>

<style>
  .post {
    text-align: left;
    border: 1px solid #a0a0a0;
    background-color: #ffffff;
    margin: 1em 0;
  }

  .avatar {
    display: inline-block;
    vertical-align: middle;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    margin: 2px;
  }

  .post-img {
    max-width: 100%;
    margin: 0;
  }

  .post-buttons {
    margin: 0.5em;
    padding: 0.5em;
  }

  .like {
    user-select: none;
    color: red;
    font-size: 22px;
  }

  .description {
    margin-left: 5px;
  }
</style>

<div id="timeline">
  {#if $posts.length > 0}
    {#each $posts as post, i}
      <div class="post">
        <img class="avatar" src={post.avatar} alt={post.username} />
        <span class="username">{post.username}</span>
        <img class="post-img" src={post.imageSrc} alt={post.title} />
        <div class="post-buttons">
          <span class="like" on:click={() => toggleLike(i)}>
            {#if post.liked}
              <Icon icon={faHeartSolid} />
            {:else}
              <Icon icon={faHeartOutline} />
            {/if}
          </span>
        </div>
        {#if post.description.length > 0}
          <p class="description">{post.description}</p>
        {/if}
      </div>
    {/each}
  {:else}
    <p>No posts</p>
  {/if}
</div>
