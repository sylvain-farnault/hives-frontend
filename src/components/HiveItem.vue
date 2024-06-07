<script>
export default {
  props: ['name', 'weight']
}
</script>

<template>
  <li>
    <strong>{{ name }}</strong>
    <span v-if="weight">( {{ weight }} grams )</span>
  </li>
</template>