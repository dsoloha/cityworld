<script>
  import Card from '$components/Card.svelte'

  import city from '$stores/city.store'
</script>

<Card>
  <p>
    Your city, {$city.name}, is located in what was once known as {$city.country}.
  </p>
</Card>
