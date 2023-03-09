<script lang="ts">
  export let handler = () => {
    return
  }
  export let focus = false
  export let type: 'button' | 'submit' | 'reset' = 'button'
</script>

<button on:click={handler} class:focus {type}>
  <slot />
</button>

<style>
  button {
    background-color: white;
    border-radius: var(--border-radius-small);
    border: 1px solid var(--light-border);
    color: black;
    padding: 1em;
  }

  button:hover {
    background-color: black;
    border-color: black;
    color: white;
  }

  button.focus {
    background-color: black;
    border-color: black;
    color: white;
  }

  button.focus:hover {
    background-color: white;
    border-color: black;
    color: black;
  }

  @media (prefers-color-scheme: dark) {
    button {
      background-color: black;
      border-color: var(--dark-border);
      color: white;
    }

    button:hover {
      background-color: white;
      border-color: black;
      color: black;
    }

    button.focus {
      background-color: white;
      color: black;
    }

    button.focus:hover {
      background-color: black;
      border-color: white;
      color: white;
    }
  }

  @media (max-width: 600px) {
    button {
      width: 100%;
    }
  }
</style>
