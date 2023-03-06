<script>
  import city from '$stores/city.store.ts'
  import Card from '$components/Card.svelte'

  $: name = $city.name
</script>

<svelte:head>
  <title>cityworld</title>
  <meta name="description" content="cityworld" />
</svelte:head>

<main>
  <section>
    <Card>
      {name}
    </Card>
  </section>
</main>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    width: 100%;
  }

  p {
    text-align: center;
  }
</style>
