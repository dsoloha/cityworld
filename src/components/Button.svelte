<script lang="ts">
  export let handler = () => {
    return
  }
  export let focus = false
  export let tooltip = ''
  export let type: 'button' | 'submit' | 'reset' = 'button'
</script>

<button on:click={handler} class:focus {type}>
  {#if tooltip != ''}
    <span>{tooltip}</span>
  {/if}
  <slot />
</button>

<style>
  button {
    background-color: white;
    border-radius: var(--border-radius-small);
    border: 1px solid var(--light-border);
    color: black;
    padding: 1em 2em;
  }

  button:hover {
    background-color: black;
    border-color: black;
    color: white;
  }

  button:hover span {
    visibility: visible;
    opacity: 1;
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

  span {
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    background-color: rgba(255, 255, 255, 0.67);
    border-radius: var(--border-radius-small);
    border: 1px solid var(--light-border);
    color: black;
    margin-left: -4em;
    margin-top: -3em;
    opacity: 0;
    padding: 1em 2em;
    position: absolute;
    transition: opacity 0.3s;
    visibility: hidden;
    z-index: 1;
  }

  span::after {
    content: '';
    left: 50%;
    position: absolute;
    top: 100%;
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

    span {
      background-color: rgba(0, 0, 0, 0.67);
      border-color: var(--dark-border);
      color: white;
    }
  }

  @media (max-width: 600px) {
    button {
      width: 100%;
    }
  }
</style>
