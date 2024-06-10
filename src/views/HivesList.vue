<template>
  <ul id="hives-list"><h2><u>Hives List</u> :</h2>
    <HiveItem
      v-for="hive in hivesListComputed"
      :key="hive.id"
      :name="hive.name"
      :weight="hive.weight"
      :hive-id="hive.id"
      @hive-show-clicked="relayHiveShowClicked"
    />
  </ul>
</template>

<script setup>
import HiveItem from '../components/HiveItem.vue'
</script>

<script>

export default {
  props: ['fire-update'],
  data() {
    return {
      hives: []
    }
  },
  created() {
  },
  mounted() {
    this.fetchDataFromApi();
  },
  methods: {
    fetchDataFromApi() {
      fetch("http://127.0.0.1:3000/api/v1/hives")
      .then(response => response.json())
      .then(data => {
        data.forEach(hive => {
          let index = this.hives.findIndex((h) => h.id === hive.id);
          // Check if the object with the specified id exists in the array
          
          if (index === -1) {
            // If not found, push a new object
            this.hives.push(hive);
          }  
        });
        if (this.fireUpdate) {
          this.$emit("update-ok");
        }
      });
    },
    relayHiveShowClicked(hiveId) {
      this.$emit("hive-show-clicked", hiveId);
    }
  },
  computed: {
    hivesListComputed() {
      return this.hives;
    }
  },
  watch: { 
      fireUpdate: function(newVal, oldVal) {
          if (newVal === true) {
            this.fetchDataFromApi();
          }
        }
      }
}
</script>

