<script>
	import { page } from '$app/stores'
</script>

<header>
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
		display: flex;
		justify-content: space-between;
		padding: 1em;
		background-color: var(--light-focus);
		border-bottom: 1px solid var(--light-border);
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--light-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
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
