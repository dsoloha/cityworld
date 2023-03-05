<script>
  import Button from '$components/Button.svelte';
  import Input from '$components/Input.svelte';
</script>

<form>
  <div class="center">
    <Input name="username" placeholder="username" />
    <Input name="password" placeholder="password" />
    <Button focus>get started -></Button>
  </div>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
