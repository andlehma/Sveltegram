<script>
  import Timeline from "./Timeline.svelte";
  import User from "./User.svelte";
</script>

<style>
  main {
    max-width: 70%;
    text-align: center;
    margin: 0 auto;
    display: grid;
		grid-template-columns: 70% 30%;
		font-family: 'Roboto', sans-serif;
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    rel="stylesheet" />
</svelte:head>

<main>
  <Timeline />
  <User />
</main>
