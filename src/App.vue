<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <GlobalGreetings msg="Hives Catalog" />

      <nav>
        <!-- <RouterLink to="/">Go to index</RouterLink> -->
        <a href="#" @click="displayHivesList">GO TO LIST</a>
        <HiveForm @new-hive="newHivePosted" />
      </nav>
    </div>
  </header>
  <div>
    <HivesList v-if="!hiveIdComputed" :fire-update="newHiveHasBeenPosted" @update-ok="resetUpdateListener" />
    <HiveShow v-else :hive-id="hiveIdComputed" />
  </div>
</template>

<script setup>
import GlobalGreetings from './components/GlobalGreetings.vue'
import HiveForm from './components/HiveForm.vue'
import HivesList from './views/HivesList.vue'
import HiveShow from './views/HiveShow.vue'
</script>

<script>
export default {
  data() {
    return {
      hiveId: null,
      newHiveHasBeenPosted: false
    }
  },

  methods: {
    displayHivesList(event) {
      event.preventDefault();
      console.log(this.hiveId);
      this.hiveId = null;
      console.log(this.hiveId);
    },
    newHivePosted() {
      console.log("newHiveCallBack from App component");
      this.newHiveHasBeenPosted = true;
    },
    resetUpdateListener() {
      console.log("resetUpdateListener from App component");
      this.newHiveHasBeenPosted = false;
    }
  },
  computed: {
    hiveIdComputed() {
      return this.hiveId;
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
