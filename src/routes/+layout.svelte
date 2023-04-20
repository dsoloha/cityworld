<script>
  import Header from '$components/Header.svelte'
  import Footer from '$components/Footer.svelte'

  import '$lib/css/classes.css'
  import '$lib/css/fonts.css'
  import '$lib/css/styles.css'

  import see from '$stores/see.store'
</script>

<div class="app">
  {#if $see.ui}
    <Header />
  {/if}
  <main>
    <slot />
  </main>
  {#if $see.ui}
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
