<script>
  import Timeline from "./Timeline.svelte";
  import User from "./User.svelte";
</script>

<style>
  main {
    max-width: 60%;
    text-align: center;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 64% 35%;
    grid-column-gap: 1%;
    font-family: "Roboto", sans-serif;
  }

  @media all and (max-width: 1000px) {
    main {
      max-width: 100%;
    }
  }

  @media all and (max-width: 584px) {
    main {
      max-width: 70%;
      display: flex;
      flex-direction: column-reverse;
    }
  }

  @media all and (max-width: 400px) {
    main {
      max-width: 100%;
    }
  }

  @media all and (min-width: 1930px) {
    main {
      width: 1200px;
    }
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
