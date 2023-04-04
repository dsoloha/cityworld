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
    <p>And what did you do, <b>{$player.name.first}</b>?</p>
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
    {#if $player.occupation}
      <p class="player-response">
        You used to {$player.occupation}.
      </p>
    {/if}
  {/if}
  {#if $player.name.first && $player.occupation}
    <Button
      focus
      handler={() => {
        $see.setup.intro = false
        $see.setup.player = false
      }}>Continue</Button
    >
  {/if}
</Card>
