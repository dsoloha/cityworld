<script>
  import Card from '$components/Card.svelte'
  import city from '$stores/city.store'
</script>

<Card>
  <p>
    Your city, {$city.name}, is located in the region of {$city.region}.
  </p>
</Card>