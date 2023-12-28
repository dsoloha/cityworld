<script>
  import Button from '$components/Button.svelte'
  import Card from '$components/Card.svelte'

  import see from '$stores/see.store'
</script>

<Card>
  <p>Future login page</p>

  <Button
    handler={() => {
      $see.setup.city = false
      $see.setup.intro = true
      $see.setup.login = false
      $see.setup.player = false
    }}
    >← Back
  </Button>
</Card>
