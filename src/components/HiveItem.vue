<script>
export default {
  props: ['name', 'weight', "hive-id"]
}
</script>

<template>
  <li>
    <strong>{{ name }}</strong> |
    <span v-if="weight">( {{ weight }} grams ) |</span>
		<RouterLink :to="{ 
      name: 'hive', 
      params: { id: hiveId } }"
                :name="name"
                :weight="weight"
                :hive-id="hiveId"
    >
      More >>
    </RouterLink>
  </li>
</template>