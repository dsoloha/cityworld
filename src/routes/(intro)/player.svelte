<script lang="ts">
  import Button from '$components/Button.svelte'
  import Card from '$components/Card.svelte'
  import Input from '$components/Input.svelte'

  import player from '$stores/player.store'
  import see from '$stores/see.store'

  let middle = ''
  let last = ''

  $: first = $player.name.first
  $: if ($player.name.middle) {
    middle = ` ${$player.name.middle}`
  }
  $: if ($player.name.last) {
    last = ` ${$player.name.last}`
  }

  $: name = first + middle + last
</script>

<Card>
  <p>
    The people living there now aren't going to accept just anyone as a leader. <b
      >Who are you, and why should you take charge?</b
    >
  </p>
  <Input name="player-name-first" placeholder="first name" bind:value={$player.name.first} />

  {#if $player.name.first}
    {#if $player.name.last}
      <Input name="player-name-middle" placeholder="middle name" bind:value={$player.name.middle} />
    {/if}
    <Input name="player-name-last" placeholder="last name" bind:value={$player.name.last} />
    <p class="player-response">
      Your name is <b>{name}</b>.
    </p>

    <p class="margin-top"><b>And what did you do, {first}?</b></p>
    <div>
      <Button
        handler={() => {
          $player.occupation = 'farmer'
        }}
        tooltip="You used to be a farmer.">Agriculture</Button
      >
      <Button
        handler={() => {
          $player.occupation = 'construction'
        }}
        tooltip="You used to own a successful construction company.">Construction</Button
      >
      <Button
        handler={() => {
          $player.occupation = 'art'
        }}
        tooltip="You used to be a freelance artist.">Art</Button
      >
      <Button
        handler={() => {
          $player.occupation = 'finance'
        }}
        tooltip="You used to be a business manager.">Finance</Button
      >
      <Button
        handler={() => {
          $player.occupation = 'education'
        }}
        tooltip="You were once the dean of a prestigious college.">Education</Button
      >
      <Button
        handler={() => {
          $player.occupation = 'politics'
        }}
        tooltip="You used to be a politician.">Politics</Button
      >
      <Button
        handler={() => {
          $player.occupation = 'science'
        }}
        tooltip="You used to be a scientist.">Science</Button
      >
      <Button
        handler={() => {
          $player.occupation = 'tech'
        }}
        tooltip="You used to work in the technology sector.">Tech</Button
      >
      <Button
        handler={() => {
          $player.occupation = 'military'
        }}
        tooltip="You were once career military.">Military</Button
      >
      <Button
        handler={() => {
          $player.occupation = 'religion'
        }}
        tooltip="You once led a large congregation.">Religious</Button
      >
      <Button
        handler={() => {
          $player.occupation = 'crime'
        }}
        tooltip="You were a career criminal.">Criminal</Button
      >
    </div>

    {#if $player.occupation}
      <p class="player-response">
        You used to <b>{$player.occupation}</b>.
      </p>

      <p class="margin-top">
        Now describe yourself a little, <b>{first}</b>. <b>Are you a male or female?</b>
      </p>
      <div>
        <Button
          handler={() => {
            $player.sex = 'male'
          }}>Male</Button
        >
        <Button
          handler={() => {
            $player.sex = 'female'
          }}>Female</Button
        >
      </div>

      {#if $player.sex}
        <p class="player-response">
          You are a <b>{$player.sex}</b>.
        </p>

        <p class="margin-top"><b>How tall are you?</b></p>
        <Input name="height" placeholder="height" bind:value={$player.height} />cm
        <p class="player-response">
          You are <b>{$player.height}cm</b> tall.
        </p>

        <p class="margin-top"><b>How much do you weigh?</b></p>
        <Input name="weight" placeholder="weight" bind:value={$player.weight} />kg
        <p class="player-response">
          You weigh <b>{$player.weight}kg</b>.
        </p>
      {/if}
    {/if}
  {/if}

  {#if $player.name.first && $player.occupation && $player.sex && $player.height && $player.weight}
    <div class="margin-top">
      <Button
        focus
        handler={() => {
          $see.setup.intro = false
          $see.setup.player = false
          $see.ui = true
        }}>Continue</Button
      >
    </div>
  {/if}
</Card>
