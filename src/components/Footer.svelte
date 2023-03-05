<script>
	import github from '$lib/images/github.svg'
</script>

<footer>
	<a href="https://github.com/dsoloha/free-cities-online" target="_blank" rel="noreferrer">
		<img src={github} alt="GitHub" />
	</a>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
