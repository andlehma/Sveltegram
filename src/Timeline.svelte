<script>
  import { posts } from "./stores.js";
</script>

<style>
  .post {
    text-align: left;
    border: 1px solid #a0a0a0;
    background-color: #ffffff;
    margin: 1em 0;
  }

  .post img {
    max-width: 100%;
    margin: 0;
  }

  .avatar {
    display: inline-block;
    vertical-align: middle;
    height: 50px;
    width: 50px;
    border-radius: 50px;
  }
</style>

<div id="timeline">
  {#if $posts.length > 0}
    {#each $posts as post}
      <div class="post">
        <img class="avatar" src={post.avatar} alt={post.username} />
        <span class="username">{post.username}</span>
        <img src={post.imageSrc} alt={post.title} />
        {#if post.description.length > 0}
          <p class="description">{post.description}</p>
        {/if}
      </div>
    {/each}
  {:else}
    <p>No posts</p>
  {/if}
</div>
