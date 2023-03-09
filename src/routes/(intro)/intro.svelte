<script>
  import Button from '$components/Button.svelte'
  import Card from '$components/Card.svelte'

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
    predicted the violent ferocity with which the collapse of society would happen, or the amount of
    brutality and inhumanity that would be found in the bloody conflicts afterwards.
  </p>
  <p>
    The world as we once knew it no longer exists. Many of the world's governments have collapsed,
    and those that still exist have found themselves weak and easy targets. New city-states are
    cropping up seemingly daily as the remnants of humanity coalesce, and the ever-growing
    settlement nearby seems to be in need of a leader.
  </p>
  <p>Are you up to the challenge?</p>
  <Button
    focus
    handler={() => {
      $see.setup.intro = false
      $see.setup.player = true
    }}>Let's do it.</Button
  >
</Card>
