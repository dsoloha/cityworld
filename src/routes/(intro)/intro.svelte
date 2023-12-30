<script>
  import Button from '$components/Button.svelte'
  import Card from '$components/Card.svelte'

  import city from '$stores/city.store'
  import see from '$stores/see.store'
</script>

<Card>
  <p>
    The 2020s were known as a turbulent decade, and as the world headed into the 2030s, the global
    situation only became more dire.
  </p>
  <p>
    The weather grew hotter. The droughts worsened. Crops failed one year after the next. Local
    conflicts grew and became global. The rich grew richer while slums grew larger.
  </p>
  <p>
    Several months ago, the day everyone had hoped would never come finally did. No one could have
    predicted the violent ferocity with which the collapse of society would happen, or the kind of
    brutality and inhumanity that would be found in the bloody conflicts following.
  </p>
  <p>
    The world as we once knew it no longer exists. Most of the world's governments have collapsed,
    and the few that still exist have found themselves weak and easy targets. New city-states are
    cropping up seemingly daily as the remnants of humanity coalesce, and the ever-growing
    settlement nearby seems to be in need of a leader.
  </p>
  <p>Are you up to the challenge?</p>
  <Button
    focus
    handler={() => {
      $see.setup.player = true
      $see.setup.intro = false
    }}
  >Let's do it.
  </Button>
  <Button
    handler={() => {
      $see.setup.login = true
      $see.setup.intro = false
    }}
  >I already have a settlement.
  </Button>
  <Button
    handler={() => {
        $city.name = 'test'
        $city.continent = 'Africa'
        $city.region = 'Australasia'

        $see.setup.city = false
        $see.setup.intro = false
        $see.setup.player = false
        $see.ui = true
      }}>Debug
  </Button
  >
</Card>
