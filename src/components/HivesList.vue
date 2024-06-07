<script setup>
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <ul id="hives-list"> {{ hiveListTitle }}
    
  </ul>
</template>


<script type="text/ecmascript-6">

export default {
  data() {
    return {
      hiveListTitle: 'Hives List',
      hives: []
    }
  },
  created() {
    console.log('Created bloc');
  },
  mounted() {
    console.log("mounted bloc");
    this.fetchDataFromApi();
    console.log(this.hives);

  },
  methods: {
    fetchDataFromApi() {
      fetch("http://127.0.0.1:3000/api/v1/hives")
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.hives = data;
      });
    }
  },
  computed() {
  }
}
</script>
