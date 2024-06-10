<template>
  <ul id="hives-list"> <u>Hives List</u> :
    <HiveItem
      v-for="hive in hivesListComputed"
      :key="hive.id"
      :name="hive.name"
      :weight="hive.weight"
      :hive-id="hive.id"
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
    console.log('Created bloc');
    console.log(this.fireUpdate);
  },
  mounted() {
    console.log("Mounted bloc");
    this.fetchDataFromApi();
  },
  methods: {
    fetchDataFromApi() {
      console.log("Start fetech ALL");
      fetch("http://127.0.0.1:3000/api/v1/hives")
      .then(response => response.json())
      .then(data => {
        data.forEach(hive => {
          let index = this.hives.findIndex((h) => h.id === hive.id);
          // Check if the object with the specified id exists in the array
          
          if (index === -1) {
            // If not found, push a new object with the desired properties
            this.hives.push(hive);
          }  
        });
        if (this.fireUpdate) {
          this.$emit("update-ok");
        }
      });
    }
  },
  computed: {
    hivesListComputed() {
      return this.hives;
    }
  },
  watch: { 
      fireUpdate: function(newVal, oldVal) {
          console.log('Prop fireUpdate changed: ', newVal, ' | was: ', oldVal);
          if (newVal === true) {
            this.fetchDataFromApi();
          }
        }
      }
}
</script>

