<script lang="ts">
  // from https://github.com/rob-balfre/svelte-select
  import Select from 'svelte-select'

  export let disabled = false
  export let filterText = ''
  export let focused = false
  export let items: any[]
  export let multiple = false
  export let name: string
  export let placeholder: string
  export let required = false
  export let searchable = true
  export let value: any = null
</script>

<div class="select">
  <Select
    {disabled}
    {filterText}
    {focused}
    {items}
    {multiple}
    {name}
    {placeholder}
    {required}
    {searchable}
    bind:value
  />
</div>

<style>
  .select {
    --background: white;
    --border-radius: var(--border-radius-small);
    --border: 1px solid black;
    --item-active-background: black;
    --item-color: black;
    --item-hover-bg: var(--light-bg);
    --item-is-active-bg: black;
    --item-is-active-color: white;
    --list-background: white;
    --list-border: 1px solid black;
  }

  @media (prefers-color-scheme: dark) {
    .select {
      --background: black;
      --border: 1px solid white;
      --item-active-background: white;
      --item-color: white;
      --item-hover-bg: var(--dark-bg);
      --item-is-active-bg: white;
      --item-is-active-color: black;
      --list-background: black;
      --list-border: 1px solid white;
    }
  }
</style>
