<script lang="ts">
  // from https://github.com/rob-balfre/svelte-select
  import Select from 'svelte-select'

  export let disabled = false
  export let filterText: string
  export let focused = false
  export let items: any[]
  export let multiple = false
  export let name: string
  export let placeholder: string
  export let required = false
  export let searchable = true
  export let value: any
</script>

<Select
  {items}
  {value}
  {filterText}
  {placeholder}
  {disabled}
  {multiple}
  {searchable}
  {focused}
  {required}
  {name}
/>
