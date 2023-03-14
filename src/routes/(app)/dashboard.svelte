<script>
  import Card from '$components/Card.svelte'

  import city from '$stores/city.store'
</script>

<Card>
  <h1>{$city.name}</h1>
  <p>dashboard goes here</p>
</Card>
