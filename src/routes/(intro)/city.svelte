<script lang="ts">
  import type { Continent, Region } from '$classes/City'

  import Button from '$components/Button.svelte'
  import Card from '$components/Card.svelte'
  import Input from '$components/Input.svelte'
  import Select from '$components/Select.svelte'

  import city from '$stores/city.store'
  import player from '$stores/player.store'
  import see from '$stores/see.store'

  const continents: Continent[] = [
    'Africa',
    'Asia',
    'Australia',
    'Europe',
    'North America',
    'South America',
  ]
  const regions: Map<Continent, Region[]> = new Map([
    [
      'Africa',
      ['Eastern Africa', 'Middle Africa', 'Northern Africa', 'Southern Africa', 'Western Africa'],
    ],
    [
      'Asia',
      [
        'Central Asia',
        'Eastern Asia',
        'Northern Asia',
        'Southeastern Asia',
        'Southern Asia',
        'Western Asia',
      ],
    ],
    ['Australia', ['Australasia', 'Melanesia', 'Micronesia', 'Oceania', 'Polynesia']],
    [
      'Europe',
      ['Channel Islands', 'Eastern Europe', 'Northern Europe', 'Southern Europe', 'Western Europe'],
    ],
    ['North America', ['Central America', 'Northern America']],
    ['South America', ['Caribbean', 'South America']],
  ])

  let region: { index: number; value: Region; label: Region } | null

  $: if (region) {
    $city.region = region.value
  }
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

    <p class="margin-top"><b>On which continent is <b>{$city.name}</b> located?</b></p>

    {#each continents as continent}
      <Button
        handler={() => {
          $city.continent = continent
          $city.region = undefined
          region = null
        }}
        focus={$city.continent == continent}>{continent}</Button
      >
    {/each}

    {#if $city.continent}
      <div class="margin-top">
        <p><b>In which region?</b></p>

        <Select
          items={regions.get($city.continent) ?? []}
          name="region"
          placeholder="region"
          bind:value={region}
        />
      </div>
    {/if}
  {/if}

  {#if $city.name}
    <p class="margin-top player-response">
      {#if $city.continent}
        It is located
        {#if $city.region}
          in the <b>{$city.region}</b> region,
        {/if}
        on or near the continent of <b>{$city.continent}</b>.
      {/if}
    </p>
  {/if}

  {#if $city.name && $city.continent && $city.region}
    <p class="player-response">
      This is the city of <b>{$city.name}</b>.
      {#if $city.continent}
        It is located
        {#if $city.region}
          in <b>{$city.region}</b>,
        {/if}
        on or near the continent of <b>{$city.continent}</b>.
      {/if}
    </p>

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
