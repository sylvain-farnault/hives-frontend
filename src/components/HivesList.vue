<script setup>
import HiveItem from './HiveItem.vue'
</script>

<template>
  <ul id="hives-list"> {{ hiveListTitle }}
    <HiveItem
      v-for="hive in globalHives"
      :key="hive.id"
      :name="hive.name"
      :weight="hive.weight"
      :hive-id="hive.id"
    />
  </ul>
</template>


<script type="text/ecmascript-6">

export default {
  data() {
    return {
      hiveListTitle: 'Hives List',
      hives: [],
      globalHives: this.globalHives
    }
  },
  created() {
    console.log('Created bloc');
  },
  mounted() {
    console.log("Mounted bloc");
    this.fetchDataFromApi();
  },
  methods: {
    fetchDataFromApi() {
      fetch("http://127.0.0.1:3000/api/v1/hives")
      .then(response => response.json())
      .then(data => {
        data.forEach(hive => {
          let index = this.globalHives.findIndex((h) => h.id === hive.id);
          // Check if the object with the specified property value exists in the array

          if (index === -1) {
            // If not found, push a new object with the desired properties
            this.globalHives.push(hive);
          }  
        });
      });
    }
  },
  computed() {
  }
}
</script>
