<script>
  import Card from '$components/Card.svelte'
  import Editable from '$components/Editable.svelte'

  import city from '$stores/city.store'

  import City from './city.svelte'
  import Player from './player.svelte'
</script>

<Card>
  <h1>
    <Editable bind:value={$city.name} />
  </h1>

  <City />
  <Player />
</Card>
