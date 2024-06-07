<template>
  <form @submit="submitForm">
		Add a new hive: <br>
		<input type="text" v-model="name" />
		<br>
		<input type="number" v-model="weight" />
		<br>
    <button>+ Add</button>
	</form>
</template>

<script type="text/javascript">
import HiveItem from './HiveItem.vue';
import { createVNode, render } from 'vue'

export default {
	data() {
		return {
			name: '',
			weight: null,
			globalHives: this.globalHives
		}
	},
	methods: {
		submitForm(event) {
			event.preventDefault();
			console.log(`Submited: Name: ${this.name} | W: ${this.weight}`);
			this.postDataToApi({"name": this.name, "weight": this.weight, "user_id": 1});
			event.currentTarget.reset();
		},

		postDataToApi(hiveParams) {
			const requestDetails = {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify(hiveParams)
			}
			fetch("http://127.0.0.1:3000/api/v1/hives", requestDetails)
        .then(response => response.json())
				.catch(error => console.log(error))
        .then(data => {
					if (typeof data.errors !== 'undefined') {
						console.log('display form errors');
					} else {
						console.log("Add new hive to dom");
						this.addNewHiveToTheDom(data);
					}
          console.log(data);
      })
			.catch(error => console.log(error));	
		},
		addNewHiveToTheDom(hive) {
			this.globalHives.push(hive);
			console.log(this.globalHives);
			
		}
	}
}
</script>

<style scoped>
</style>
