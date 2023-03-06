<section>
  <slot />
</section>

<style>
  section {
    background-color: var(--light-focus);
    border-radius: var(--border-radius-large);
    border: 1px solid var(--light-border);
    color: var(--light-text);
    margin: 1em 0;
    padding: 3em 3em;
    width: 80%;
  }

  @media (prefers-color-scheme: dark) {
    section {
      background-color: var(--dark-focus);
      border: 1px solid var(--dark-border);
      color: var(--dark-text);
    }
  }

  @media (max-width: 600px) {
    section {
      padding: 1em 2em;
    }
  }
</style>
