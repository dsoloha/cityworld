<script>
  import Card from '$components/Card.svelte'
  import Editable from '$components/Editable.svelte'

  import city from '$stores/city.store'
</script>

<Card>
  <h1>
    <Editable bind:value={$city.name} />
  </h1>
  <p>dashboard goes here</p>
</Card>
