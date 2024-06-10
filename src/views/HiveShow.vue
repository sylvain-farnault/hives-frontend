<script>
export default {
	name: "HiveShow",
  props: ['name', 'weight', 'hiveIdProp'],
	data() {
		return {
			hive: null,
			hiveId: this.$route.params.id, // should come from props
		}
	},
	created() {
		this.fetchHiveFromApi();
	},
	methods: {
    fetchHiveFromApi() {
      fetch(`http://127.0.0.1:3000/api/v1/hives/${this.hiveId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
				this.hive = data;
      });
    }
  },
	computed: {
		hiveName() {
			return this.hive?.name || ''
		},
		hiveWeight() {
			return this.hive?.weight || ''
		}
	}
}
</script>

<template>
  <div class="show">
		<br>
		<hr>
    <h1>{{ hiveName }}  (id:{{ hiveId }})</h1>
		<br>
		<br>
    => Weight: {{ hiveWeight }} grams
		<hr>	
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .show {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
