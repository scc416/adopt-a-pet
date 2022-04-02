<template>
  <div class="nav">
    <router-link class="logo" :to="{ name: 'home' }">
      <div>
        <img src="../../public/favicon.png" />
        Adopt a Pet
      </div>
    </router-link>

    <a
      class="github"
      href="https://github.com/scc416/adopt-a-pet"
      target="_blank"
    >
      <div>Github Repo<GithubIcon /></div>
    </a>
  </div>
</template>

<script>
import GithubIcon from "vue-material-design-icons/Github.vue";

export default { components: { GithubIcon } };
</script>

<style>
.nav {
  display: flex;
  margin: 1.4em 2.8em;
  justify-content: space-between;
  align-items: center;
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

.nav .github div {
  color: #3aab97;
  font-weight: 600;
  border-radius: 5em;
  padding: 0.5em 0.7em;
  border: #3aab97 solid 0.1em;
  font-size: 0.9em;
  display: flex;
  align-items: center;
}

.nav a.github {
  text-decoration: none;
}

.nav a.github div:hover {
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