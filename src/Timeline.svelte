<script>
  import { posts, username } from "./stores.js";
  import Icon from "fa-svelte";
  import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons/faHeart";
  import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons/faHeart";

  function toggleLike(i) {
    let newPosts = $posts;
    newPosts[i].liked = !newPosts[i].liked;
    posts.set(newPosts);
  }

  function leaveComment(i) {
    let newPosts = $posts;
    newPosts[i].comments.push({
      username: $username,
      content: commentText[i]
    });
    commentText[i] = "";
    posts.set(newPosts);
  }

  let commentText = [];
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
    object-fit: cover;
    border-radius: 50px;
    margin: 2px;
  }

  .post-img {
    width: 100%;
    margin: 0;
  }

  .post-buttons {
    margin: 0.5em;
    padding: 0.5em;
    font-size: 22px;
    user-select: none;
  }

  .like {
    color: red;
    cursor: pointer;
  }

  .description,
  .comments {
    margin-left: 5px;
  }

  .comment-box {
    width: 89%;
  }

  .post-comment-button {
    width: 10%;
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
          <p class="description">
            <strong>{post.username}</strong>
            {@html post.description}
          </p>
        {/if}
        <div class="comments">
          {#if post.comments.length > 0}
            {#each post.comments as comment}
              <p class="comment">
                <strong>{comment.username}</strong>
                {comment.content}
              </p>
            {/each}
          {:else}
            <p>No comments</p>
          {/if}
        </div>
        <input
          type="text"
          bind:value={commentText[i]}
          class="comment-box"
          placeholder="Leave a comment" />
        <button class="post-comment-button" on:click={() => leaveComment(i)}>
          Post
        </button>
      </div>
    {/each}
  {:else}
    <p>No posts</p>
  {/if}
</div>
