<script>
  import Header from '$components/Header.svelte'
  import Footer from '$components/Footer.svelte'
  import '$lib/css/styles.css'
  import '$lib/css/fonts.css'

  let player = true
</script>

<div class="app">
  {#if player}
    <Header />
  {/if}
  <main>
    <slot />
  </main>
  {#if player}
    <Footer />
  {/if}
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
