<script lang="ts">
	export let name: string
	export let placeholder = name
	export let value: string | number = ''
</script>

<input {name} {placeholder} bind:value />

<style>
	input {
		background-color: var(--light-focus);
		border-radius: var(--border-radius-small);
		border: 1px solid var(--light-border);
		box-sizing: content-box;
		color: var(--light-text);
		max-width: 100%;
		min-width: fit-content;
		outline: none;
		padding: 1em;
		resize: none;
		width: auto;
	}

	input:focus {
		border: 1px solid var(--dark-focus);
	}

	@media (prefers-color-scheme: dark) {
		input {
			background-color: var(--dark-focus);
			border-color: var(--dark-border);
			color: var(--dark-text);
		}

		input:focus {
			border: 1px solid var(--light-focus);
		}
	}

	@media (max-width: 600px) {
		input {
			display: flex;
			flex-direction: column;
			flex: 1;
			max-width: 100%;
		}
	}
</style>
