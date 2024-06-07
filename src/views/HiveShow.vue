<script>
export default {
  props: ['name', 'weight'],
	data() {
		return {
			globalHives: this.globalHives,
			hiveId: this.$route.params.id,
			hive: this.globalHives.find( hive => hive.id == this.$route.params.id) // Using '==' as we compare Integer with String
		}
	},
	created() {
		console.log(this.globalHives);
		console.log(this.hiveId);
		console.log(this.hive);
		if (this.hive === undefined ) {
			console.log("Hive not def, let(s go fetch it");
			this.fetchHiveFromApi();
		}
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
}
</script>

<template>
  <div class="show">
		<br>
		<hr>
    <h1>{{ hive.name }}  (id:{{ hiveId }})</h1>
		<br>
    => Weight: {{ hive.weight }} grams
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
