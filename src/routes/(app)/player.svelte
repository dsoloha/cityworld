<script>
  import Card from '$components/Card.svelte'
  import player from '$stores/player.store'
</script>

<Card>
  <p>
    You are {$player.name.first}. You are a {$player.height}cm tall, {$player.weight}kg {$player.sex}.
  </p>
</Card>
