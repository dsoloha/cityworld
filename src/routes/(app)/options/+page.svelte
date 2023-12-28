<script>
  import Card from '$components/Card.svelte'
  import Link from '$components/Link.svelte'

  import see from '$stores/see.store'
</script>

<Card>
  <h1>options</h1>
  <Link
    to="/"
    handler={() => {
      $see.setup.city = false
      $see.setup.intro = true
      $see.setup.login = false
      $see.setup.player = false
      $see.ui = false
    }}>Debug</Link
  >
</Card>
