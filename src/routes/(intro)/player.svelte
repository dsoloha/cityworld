<script lang="ts">
  import Button from '$components/Button.svelte'
  import Card from '$components/Card.svelte'
  import Input from '$components/Input.svelte'
  import Select from '$components/Select.svelte'

  import player from '$stores/player.store'
  import see from '$stores/see.store'
  import { capitalize } from '$util/string'
  import type { SelectItem } from '$util/types'

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
  const units = { weight: ['kg', 'lbs'], height: ['cm', 'in'] }

  let heightUnit: SelectItem<string> = { index: 0, value: 'cm', label: 'cm' }
  let weightUnit: SelectItem<string> = { index: 0, value: 'kg', label: 'kg' }

  $: first = $player.name.first
  $: name = $player.full
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
          focus={$player.occupation == occupation[0]}
          tooltip={occupation[1]}>{capitalize(occupation[0])}</Button
        >
      {/each}
    </div>

    {#if $player.occupation}
      <p class="player-response">
        <b>{occupation[1]}</b>
      </p>

      <p class="margin-top">
        Now describe yourself a little, <b>{first}</b>. <b>Are you a male or female?</b>
      </p>
      <div>
        <Button
          handler={() => {
            $player.sex = 'male'
          }}
          focus={$player.sex == 'male'}>Male</Button
        >
        <Button
          handler={() => {
            $player.sex = 'female'
          }}
          focus={$player.sex == 'female'}>Female</Button
        >
      </div>

      {#if $player.sex}
        <p class="player-response">
          You are a <b>{$player.sex}</b>.
        </p>

        <p class="margin-top"><b>How tall are you?</b></p>
        <div class="flex">
          <Input name="height" placeholder="height" bind:value={$player.height} />
          <Select
            clearable={false}
            fullWidth={false}
            items={units.height}
            name="units-height"
            placeholder="cm"
            searchable={false}
            bind:value={heightUnit}
          />
        </div>
        <p class="player-response">
          You are <b>{$player.height}{heightUnit?.value}</b> tall.
        </p>

        <p class="margin-top"><b>How much do you weigh?</b></p>
        <div class="flex">
          <Input name="weight" placeholder="weight" bind:value={$player.weight} />
          <Select
            clearable={false}
            fullWidth={false}
            items={units.weight}
            name="units-weight"
            placeholder="kg"
            searchable={false}
            bind:value={weightUnit}
          />
        </div>
        <p class="player-response">
          You weigh <b>{$player.weight}{weightUnit?.value}</b>.
        </p>
      {/if}
    {/if}
  {/if}

  {#if $player.name.first}
    <p class="margin-top player-response">
      You are <b>{name}</b>.
      {#if $player.occupation}
        <b>{occupation[1]}</b>
      {/if}
      {#if $player.sex}
        You are a <b>{$player.sex}</b>.
        {#if $player.height}
          You are <b>{$player.height}</b>cm tall.
        {/if}
        {#if $player.weight}
          You weigh <b>{$player.weight}</b>kg.
        {/if}
      {/if}
    </p>
  {/if}

  {#if $player.name.first && $player.occupation && $player.sex && $player.height && $player.weight}
    <div class="margin-top">
      <Button
        focus
        handler={() => {
          $see.setup.city = true
          $see.setup.intro = false
          $see.setup.player = false
          $see.ui = false
        }}>Continue</Button
      >
    </div>
  {/if}
</Card>
