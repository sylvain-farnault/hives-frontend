<script>
export default {
  name: "HiveItem",
  props: ['name', 'weight', "hiveId"],
  methods: {
    hiveShowClicked(id) {
      this.$emit("hive-show-clicked", id);
    }
  }
}
</script>

<template>
  <li>
    <strong>{{ name }}</strong> |
    <span v-if="weight">( {{ weight }} grams ) |</span>
    <button @click="hiveShowClicked(hiveId)">
      More >>
    </button>
  </li>
</template>