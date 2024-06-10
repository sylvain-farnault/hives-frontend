<script>
export default {
	name: "HiveShow",
  props: ['name', 'weight', 'hiveId'],
	data() {
		return {
			hive: null
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
		<ul><h1>{{ hiveName }}</h1>
			<li>Id: {{ hiveId }}</li>
			<li>Weight: 
				<span v-if="hiveWeight">{{ hiveWeight }} grams</span>
				<span v-else><i>No Data</i></span>
			</li>
		</ul>
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
