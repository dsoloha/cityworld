<script>
  import Dashboard from './(app)/dashboard.svelte'
  import Intro from './(intro)/intro.svelte'
  import Player from './(intro)/player.svelte'

  import see from '$stores/see.store'
  import City from './(intro)/city.svelte'
</script>

<svelte:head>
  <title>cityworld</title>
  <meta name="description" content="cityworld" />
</svelte:head>

<main>
  {#if $see.setup.intro}
    <Intro />
  {:else if $see.setup.player}
    <Player />
  {:else if $see.setup.city}
    <City />
  {:else}
    <Dashboard />
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }
</style>
