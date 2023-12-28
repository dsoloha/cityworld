<script>
  import see from '$stores/see.store'

  import Dashboard from './(app)/dashboard.svelte'

  import City from './(intro)/city.svelte'
  import Intro from './(intro)/intro.svelte'
  import Login from './(intro)/login.svelte'
  import Player from './(intro)/player.svelte'
</script>

<svelte:head>
  <title>cityworld</title>
  <meta name="description" content="cityworld" />
</svelte:head>

{#if $see.setup.intro}
  <Intro />
{:else if $see.setup.login}
  <Login />
{:else if $see.setup.player}
  <Player />
{:else if $see.setup.city}
  <City />
{:else}
  <Dashboard />
{/if}
