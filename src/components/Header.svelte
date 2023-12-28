<script>
  import { page } from '$app/stores'
  import city from '$stores/city.store'

  const path = $page.url.pathname
</script>

<header>
  <div class="info">
    <div class="city-name">
      <p>{$city.name}</p>
    </div>
    <div class="currency">
      <p>$0</p>
    </div>
    <div class="population">
      <p>0 citizens</p>
    </div>
  </div>
  <div class="date">
    <div class="week">
      <p>week 0</p>
    </div>
  </div>
  <div class="settings">
    <ul>
      <li aria-current={path === '/' ? 'page' : undefined}>
        <a href="/">home</a>
      </li>
      <li aria-current={path.startsWith('/options') ? 'page' : undefined}>
        <a href="/options">options</a>
      </li>
      <li aria-current={path.startsWith('/profile') ? 'page' : undefined}>
        <a href="/profile">profile</a>
      </li>
      <li aria-current={path.startsWith('/help') ? 'page' : undefined}>
        <a href="/help">help</a>
      </li>
    </ul>
  </div>
</header>

<style>
  .city-name {
    color: var(--light-text);
    font-weight: bold;
  }

  .info {
    color: var(--text-secondary);
    display: flex;
    margin-left: 2em;
  }

  .info > * {
    padding: 0 1em;
  }

  .settings {
    display: flex;
    justify-content: center;
  }

  .settings a {
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

  header {
    background-color: var(--light-focus);
    border-bottom: 1px solid var(--light-border);
    display: flex;
    justify-content: space-between;
    padding: 1em;
  }

  ul {
    align-items: center;
    background-size: contain;
    display: flex;
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

  li:not([aria-current='page']) a {
    color: var(--light-link-inactive);
  }

  li:not([aria-current='page']) a:hover {
    color: var(--light-link-hover);
  }

  @media (prefers-color-scheme: dark) {
    .city-name {
      color: var(--dark-text);
    }

    .settings a {
      color: var(--dark-text);
    }

    header {
      background-color: var(--dark-focus);
      border-bottom: 1px solid var(--dark-border);
    }

    li:not([aria-current='page']) a {
      color: var(--dark-link-inactive);
    }

    li:not([aria-current='page']) a:hover {
      color: var(--dark-link-hover);
    }
  }
</style>
