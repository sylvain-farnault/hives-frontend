<template>
  <form @submit="submitForm">
		Add a new hive: <br>
		<input type="text" v-model="name" name="name"/>
		<br>
		<input type="number" v-model="weight" name="weight" />
		<br>
    <button>+ Add</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			weight: null
		}
	},
	methods: {
		submitForm(event) {
			event.preventDefault();
			this.postDataToApi({"name": this.name, "weight": this.weight, "user_id": 1}); // user_id key as I didn't update API
			event.currentTarget.reset();
		},

		postDataToApi(hiveParams) {
			const requestDetails = {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify(hiveParams)
			}
			fetch(this.hivesApiBaseUrl, requestDetails)
        .then(response => response.json())
				.catch(error => console.log(error))
        .then(data => {
					if (typeof data.errors !== 'undefined') {
						// console.log('display form errors');
					} else {
						// console.log("Add new hive to dom");
						this.$emit("new-hive");
					}
      })
			.catch(error => console.log(error));	
		}
	}
}
</script>

<style scoped>
</style>
