<script>
  import Button from '$components/Button.svelte'
  import Card from '$components/Card.svelte'
  import Input from '$components/Input.svelte'

  import city from '$stores/city.store'
  import player from '$stores/player.store'
  import see from '$stores/see.store'
</script>

<Card>
  <p>
    It seems the people here were impressed with what you told them, {$player.name.first}, and have
    decided to give you a chance as leader.
  </p>
  <p>
    <b>
      But where <i>is</i> "here"?
    </b>
  </p>
  <Input name="city-name" placeholder="city name" bind:value={$city.name} />

  {#if $city.name}
    <p class="player-response">
      This city is called <b>{$city.name}</b>.
    </p>

    <p class="margin-top"><b>Where is <b>{$city.name}</b> located?</b></p>
    <Input name="continent" placeholder="continent" />
    <Input name="country" placeholder="country" />
  {/if}

  {#if $city.name}
    <p class="margin-top player-response">
      This is the city of <b>{$city.name}</b>.
    </p>
  {/if}

  {#if $city.name}
    <div class="margin-top">
      <Button
        focus
        handler={() => {
          $see.setup.city = false
          $see.setup.intro = false
          $see.setup.player = false
          $see.ui = true
        }}>Continue</Button
      >
    </div>
  {/if}
</Card>
