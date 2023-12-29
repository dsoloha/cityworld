<section>
  <slot />
</section>

<style>
  section {
    background-color: var(--light-focus);
    border-radius: var(--border-radius-large);
    border: 1px solid var(--light-border);
    color: var(--light-text);
    margin-top: 2em;
    padding: 4em;
    min-height: calc(var(--standard-unit) * 3);
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
