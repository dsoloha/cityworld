<script>
  import { createEventDispatcher, onMount } from 'svelte'

  export let value,
    required = true

  const dispatch = createEventDispatcher()
  let editing = false,
    original

  onMount(() => {
    original = value
  })

  function edit() {
    editing = true
  }

  function submit() {
    if (value != original) {
      dispatch('submit', value)
    }

    editing = false
  }

  function keydown(event) {
    if (event.key == 'Escape') {
      event.preventDefault()
      value = original
      editing = false
    }
  }

  function focus(element) {
    element.focus()
  }
</script>

{#if editing}
  <form on:submit|preventDefault={submit} on:keydown={keydown}>
    <input bind:value on:blur={submit} {required} use:focus />
  </form>
{:else}
  <div on:click={edit}>
    {value}
  </div>
{/if}

<style>
  /* div {
    padding: 0.11em 0.6em 0;
	} */

  input {
    background-color: var(--light-focus);
    border-radius: var(--border-radius-small);
    border: 1px solid var(--light-border);
    box-sizing: content-box;
    color: var(--light-text);
    max-width: 100%;
    min-width: fit-content;
    outline: none;
    padding: 0 0.5em;
    resize: none;
    width: auto;
    font-weight: 300;
  }

  input:focus {
    border: 1px solid var(--dark-focus);
  }

  @media (max-width: 600px) {
    input {
      display: flex;
      flex-direction: column;
      flex: 1;
      max-width: 100%;
    }
  }

  @media (prefers-color-scheme: dark) {
    input {
      background-color: var(--dark-focus);
      border: 1px solid var(--dark-border);
      color: var(--dark-text);
    }

    input:focus {
      border: 1px solid var(--light-focus);
    }
  }
</style>
