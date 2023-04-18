<script>
  export let min = 0
  export let max = 100
  export let value = 50
</script>

<div class="container">
  <input type="range" {min} {max} {value} />
</div>

<style>
  .container {
    width: 100%;
  }

  input {
    outline: none;
  }
</style>
