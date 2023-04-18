<script>
  import Button from '$components/Button.svelte'
  import Card from '$components/Card.svelte'
  import Input from '$components/Input.svelte'

  import city from '$stores/city.store'
  import player from '$stores/player.store'
  import see from '$stores/see.store'

  const continents = ['Africa', 'Asia', 'Australia', 'Europe', 'North America', 'South America']
  const countries = [
    [
      'Africa',
      [
        'Algeria',
        'Angola',
        'Benin',
        'Botswana',
        'Burkina Faso',
        'Burundi',
        'Cabo Verde',
        'Cameroon',
        'Central African Republic',
        'Chad',
        'Comoros',
        'Congo',
        'Djibouti',
        'Democratic Republic of the Congo',
        'Egypt',
        'Equatorial Guinea',
        'Eritrea',
        'Eswatini',
        'Ethiopia',
        'Gabon',
        'Gambia',
        'Ghana',
        'Guinea-Bissau',
        'Guinea',
        'Kenya',
        'Lesotho',
        'Liberia',
        'Libya',
        'Madagascar',
        'Malawi',
        'Mali',
        'Mauritania',
        'Mauritius',
        'Morocco',
        'Mozambique',
        'Namibia',
        'Niger',
        'Nigeria',
        'Rwanda',
        'Sao Tome & Principe',
        'Senegal',
        'Seychelles',
        'Sierra',
        'Somalia',
        'South',
        'South',
        'Sudan',
        'Tanzania',
        'Togo',
        'Tunisia',
        'Uganda',
        'Zambia',
        'Zimbabwe',
        "Côte d'Ivoire",
      ],
    ],
    [
      'Asia',
      [
        'Afghanistan',
        'Armenia',
        'Azerbaijan',
        'Bahrain',
        'Bangladesh',
        'Bhutan',
        'Brunei',
        'Cambodia',
        'China',
        'Cyprus',
        'Georgia',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Israel',
        'Japan',
        'Jordan',
        'Kazakhstan',
        'Kuwait',
        'Kyrgyzstan',
        'Laos',
        'Lebanon',
        'Malaysia',
        'Maldives',
        'Mongolia',
        'Myanmar',
        'Nepal',
        'North Korea',
        'Oman',
        'Pakistan',
        'Philippines',
        'Qatar',
        'Saudi Arabia',
        'Singapore',
        'South',
        'Sri Lanka',
        'State',
        'Syria',
        'Tajikistan',
        'Thailand',
        'Timor-Leste',
        'Turkey',
        'Turkmenistan',
        'United Arab Emirates',
        'Uzbekistan',
        'Vietnam',
        'Yemen',
      ],
    ],
    ['Australia', ['Australia']],
    [
      'Europe',
      [
        'Albania',
        'Andorra',
        'Austria',
        'Belarus',
        'Belgium',
        'Bosnia and Herzegovina',
        'Bulgaria',
        'Croatia',
        'Czech Republic',
        'Denmark',
        'Estonia',
        'Finland',
        'France',
        'Germany',
        'Greece',
        'Holy See',
        'Hungary',
        'Iceland',
        'Ireland',
        'Italy',
        'Latvia',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Malta',
        'Moldova',
        'Monaco',
        'Montenegro',
        'the Netherlands',
        'North Macedonia',
        'Norway',
        'Poland',
        'Portugal',
        'Romania',
        'Russia',
        'San Marino',
        'Serbia',
        'Slovakia',
        'Slovenia',
        'Spain',
        'Sweden',
        'Switzerland',
        'Ukraine',
        'United Kingdom',
      ],
    ],
    ['North America', ['Canada', 'United States', 'Mexico']],
    [
      'South America',
      [
        'Argentina',
        'Bolivia',
        'Brazil',
        'Chile',
        'Colombia',
        'Ecuador',
        'Guyana',
        'Paraguay',
        'Peru',
        'Suriname',
        'Uruguay',
        'Venezuela',
      ],
    ],
  ]
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
        }}
        focus={$city.continent == continent}>{continent}</Button
      >
    {/each}

    {#if $city.continent}
      <div class="margin-top">
        <p><b>In which country?</b></p>

        {#each countries as continent}
          {#if continent[0] == $city.continent}
            {#each continent[1] as country}
              <Button
                handler={() => {
                  $city.country = country
                }}
                focus={$city.country == country}>{country}</Button
              >
            {/each}
          {/if}
        {/each}
      </div>
    {/if}
  {/if}

  {#if $city.name}
    <p class="margin-top player-response">
      This is the city of <b>{$city.name}</b>.
      {#if $city.continent}
        It is located
        {#if $city.country}
          in the country of <b>{$city.country}</b>,
        {/if}
        on the continent of <b>{$city.continent}</b>.
      {/if}
    </p>
  {/if}

  {#if $city.name && $city.continent && $city.country}
    <p class="player-response">This is the city of <b>{$city.name}</b>.</p>

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
