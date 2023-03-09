<script lang="ts">
  import Button from '$components/Button.svelte'
  import Card from '$components/Card.svelte'
  import Input from '$components/Input.svelte'

  import player from '$stores/player.store'
  import see from '$stores/see.store'
</script>

<Card>
  <p>
    The people living there now aren't going to accept just anyone as a leader. <b>Who are you?</b>
  </p>
  <Input name="player-name" placeholder="your name" bind:value={$player.name} />
  <Button
    focus
    handler={() => {
      $see.setup.player = false
    }}>Continue</Button
  >
</Card>
