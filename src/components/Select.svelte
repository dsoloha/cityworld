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
  export let value: any
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
    {value}
  />
</div>

<style>
  .select {
    --background: white;
    --border-radius: var(--border-radius-small);
    --border: 1px solid black;
    --item-active-background: black;
    --item-color: black;
    --item-hover-bg: black;
    --item-hover-color: white;
    --item-is-active-color: black;
    --list-background: white;
    --list-border: 1px solid black;
  }

  @media (prefers-color-scheme: dark) {
    .select {
      --background: black;
      --border: 1px solid white;
      --item-active-background: white;
      --item-color: white;
      --item-hover-bg: white;
      --item-hover-color: black;
      --item-is-active-color: white;
      --list-background: black;
      --list-border: 1px solid white;
    }
  }
</style>
