<script>
  import RangeSlider from '$components/RangeSlider.svelte'
</script>

<svelte:head>
  <title>cityworld</title>
  <meta name="description" content="cityworld" />
</svelte:head>

<main>
  <RangeSlider />
</main>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }
</style>
