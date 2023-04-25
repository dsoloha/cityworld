<script>
  import Card from '$components/Card.svelte'
  import Editable from '$components/Editable.svelte'

  import city from '$stores/city.store'
  import player from '$stores/player.store'
</script>

<Card>
  <h1>
    <Editable bind:value={$city.name} />
  </h1>
  <p>
    You are {$player.name.first}. You are a {$player.height}cm tall, {$player.weight}kg {$player.sex}.
  </p>
  <p>
    Your city, {$city.name}, is located in what was once known as {$city.country}.
  </p>
</Card>
