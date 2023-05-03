<script lang="ts">
  export let handler: () => void
  export let focus = false
  export let to: string
</script>

<div class:focus>
  <a href={to} on:click={handler}>
    <slot />
  </a>
</div>

<style>
  a {
    color: black;
    text-decoration: none;
  }

  div {
    background-color: white;
    border-radius: var(--border-radius-small);
    border: 1px solid var(--light-border);
    padding: 1em 2em;
    width: fit-content;
  }

  div:hover {
    background-color: black;
    border-color: black;
  }

  div:hover a {
    color: white;
  }

  div.focus {
    background-color: black;
    border-color: black;
  }

  div.focus a {
    color: white;
  }

  div.focus:hover a {
    color: black;
  }

  div.focus:hover {
    background-color: white;
    border-color: black;
  }

  @media (prefers-color-scheme: dark) {
    a {
      background-color: black;
      border-color: var(--dark-border);
      color: white;
    }

    div {
      background-color: black;
      border: 1px solid var(--dark-border);
    }

    div:hover {
      background-color: white;
      border-color: black;
      color: black;
    }

    div:hover a {
      background-color: white;
      color: black;
    }

    div.focus {
      background-color: white;
      color: black;
    }

    div.focus:hover {
      background-color: black;
      border-color: white;
      color: white;
    }
  }

  @media (max-width: 600px) {
    a {
      width: 100%;
    }
  }
</style>
