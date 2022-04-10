<template>
  <div class="nav">
    <div>
      <router-link class="logo" :to="{ name: 'home' }">
        <div>
          <img src="../../public/favicon.png" />
          Adopt a Pet
        </div>
      </router-link>
      <div>
        <router-link :to="{ name: 'pets' }"> View all pets </router-link>
        <a href="https://github.com/scc416/adopt-a-pet" target="_blank">
          GitHub Repo
        </a>
      </div>
    </div>

    <router-link class="saved" :to="{ name: 'saved' }">
      <div>Saved <HeartIcon /></div>
    </router-link>
  </div>
</template>

<script>
import HeartIcon from "vue-material-design-icons/Heart.vue";

export default { components: { HeartIcon } };
</script>

<style>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
}

.nav > div {
  display: flex;
  align-items: center;
}

.nav > div > *:nth-child(2) {
  margin-left: 10em;
  font-weight: 600;
  font-size: 0.9em;
  display: flex;
}

.nav > div > *:nth-child(2) > * {
  color: #515151;
  text-decoration: none;
  margin-right: 5em;
}

.logo {
  color: #3aab97;
  text-decoration: none;
  font-family: "Raleway";
  font-weight: 900;
  font-size: 1.8em;
}

.logo > div {
  display: flex;
  align-items: center;
}

.logo img {
  width: 1.4em;
  margin-right: 0.35em;
  position: relative;
  bottom: 0.05em;
}

.nav .saved div {
  color: #3aab97;
  font-weight: 600;
  border-radius: 5em;
  padding: 0.5em 0.7em 0.5em 1.15em;
  border: #3aab97 solid 0.1em;
  font-size: 0.9em;
  display: flex;
  align-items: center;
}

.nav a.saved {
  text-decoration: none;
}

.nav a.saved div:hover {
  color: #fff;
  background: #3aab97;
  cursor: pointer;
}

.nav .material-design-icon {
  height: 1.4em;
  width: 1.4em;
  margin-left: 0.2em;
}

.nav .material-design-icon > .material-design-icon__svg {
  height: 1.4em;
  width: 1.4em;
}
</style>