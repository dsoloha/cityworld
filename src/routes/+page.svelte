<script>
  import Intro from '../routes/(intro)/intro.svelte'
  import Player from '../routes/(intro)/player.svelte'

  import see from '$stores/see.store'
</script>

<svelte:head>
  <title>cityworld</title>
  <meta name="description" content="cityworld" />
</svelte:head>

<main>
  {#if $see.setup.intro}
    <Intro />
  {/if}
  {#if $see.setup.player}
    <Player />
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
