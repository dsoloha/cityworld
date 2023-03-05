<script>
  import { page } from '$app/stores';
  const path = $page.url.pathname;
</script>

<header>
  {#if $page.url.pathname === '/'}
    <h1>city name</h1>
  {:else}
    <h1>{$page.url.pathname.charAt(1).toUpperCase() + $page.url.pathname.slice(2)}</h1>
  {/if}
  <nav>
    <ul>
      <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
        <a href="/">Home</a>
      </li>
      <li aria-current={$page.url.pathname === '/manage' ? 'page' : undefined}>
        <a href="/manage">Manage</a>
      </li>
      <li aria-current={$page.url.pathname === '/social' ? 'page' : undefined}>
        <a href="/social">Social</a>
      </li>
      <li aria-current={$page.url.pathname === '/facilities' ? 'page' : undefined}>
        <a href="/facilities">Facilities</a>
      </li>
      <li aria-current={$page.url.pathname === '/locations' ? 'page' : undefined}>
        <a href="/locations">Locations</a>
      </li>
      <li aria-current={$page.url.pathname.startsWith('/tools') ? 'page' : undefined}>
        <a href="/tools">Tools</a>
      </li>
      <li aria-current={$page.url.pathname.startsWith('/settings') ? 'page' : undefined}>
        <a href="/settings">Settings</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    background-color: var(--light-focus);
    border-bottom: 1px solid var(--light-border);
    display: flex;
    justify-content: space-between;
    padding: 1em;
  }

  header h1 {
    font-size: 1.75em;
    font-weight: 300;
    margin-bottom: 0;
    margin-left: 1em;
    margin-top: 0;
  }

  nav {
    display: flex;
    justify-content: center;
  }

  ul {
    align-items: center;
    background-size: contain;
    display: flex;
    height: 3em;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
  }

  li {
    position: relative;
    height: 100%;
  }

  nav a {
    align-items: center;
    color: var(--light-text);
    display: flex;
    font-size: 0.8rem;
    font-weight: 100;
    height: 100%;
    letter-spacing: 0.1em;
    padding: 0 0.75rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.2s linear;
  }

  li:not([aria-current='page']) a {
    color: var(--light-link-inactive);
  }

  li:not([aria-current='page']) a:hover {
    color: var(--light-link-hover);
  }

  @media (prefers-color-scheme: dark) {
    header {
      background-color: var(--dark-focus);
      border-bottom: 1px solid var(--dark-border);
    }

    nav a {
      color: var(--dark-text);
    }

    li:not([aria-current='page']) a {
      color: var(--dark-link-inactive);
    }

    li:not([aria-current='page']) a:hover {
      color: var(--dark-link-hover);
    }
  }
</style>
