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
      <div>Github</div>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav {
  display: flex;
  margin: 1.4em 2.8em;
  justify-content: space-between;
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
  background: #3aab97;
  font-weight: 600;
  border-radius: 5em;
  padding: 0.9em 1.2em;
  font-size: 1.2em;
}

.nav a.github {
  color: #fff;
  text-decoration: none;
}
</style>