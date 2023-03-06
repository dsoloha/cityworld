<script>
  import Header from '$components/Header.svelte'
  import Footer from '$components/Footer.svelte'
  import '$lib/css/styles.css'
  import '$lib/css/fonts.css'

  let user = true // temporary until I get auth working
</script>

<div class="app">
  {#if user}
    <Header />
  {/if}
  <main>
    <slot />
  </main>
  {#if user}
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
