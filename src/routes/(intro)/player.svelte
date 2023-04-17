<script lang="ts">
  import Button from '$components/Button.svelte'
  import Card from '$components/Card.svelte'
  import Input from '$components/Input.svelte'

  import player from '$stores/player.store'
  import see from '$stores/see.store'

  const occupations = [
    ['agriculture', 'You once owned and operated a large farm.'],
    ['construction', 'You built your own successful construction company from the ground up.'],
    ['art', 'You used to be a freelance artist.'],
    ['finance', 'You were the former finance manager at a large corporation.'],
    ['education', 'You were once the dean of a prestigious college.'],
    ['politics', 'You used to be a politician.'],
    ['science', 'You used to be a scientist.'],
    ['tech', 'You used to work in the technology sector.'],
    ['military', 'You were once career military.'],
    ['religion', 'You once led a large congregation.'],
    ['crime', 'You were a career criminal.'],
  ]

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
  $: occupation = occupations.find((occupation) => occupation[0] == $player.occupation) ?? ''
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
      {#each occupations as occupation}
        <Button
          handler={() => {
            $player.occupation = occupation[0]
          }}
          tooltip={occupation[1]}>{occupation[0]}</Button
        >
      {/each}
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

  {#if $player.name.first}
    <p class="margin-top player-response">
      You are <b>{$player.name.first}</b>.
      {#if $player.occupation}
        {occupation[1]}
      {/if}
    </p>
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
