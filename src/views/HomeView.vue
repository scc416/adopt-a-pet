<template>
  <div class="home">
    <HomeTitle />
    <Button />
  </div>
</template>

<script>
import HomeTitle from "../components/HomeTitle/";
import Button from "../components/HomeTitle/Button.vue";

export default { components: { HomeTitle, Button } };
</script>

<style>
.home {
  position: absolute;
  background-image: url("../assets/home-background.jpg");
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 2em;
  font-weight: 500;
  top: 0;
  left: 0;
  z-index: -1;
}

.home a {
  color: #595959;
  text-decoration: none;
}

.home > * {
  position: relative;
  left: calc(2.8em + 8vw);
  bottom: 4vh;
  width: auto;
  z-index: 1;
  margin: 0.2em 0;
}

.home > div:first-child > span {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.2em;
}

.home > div > div {
  background: #e5e4e2;
  width: 10em;
  height: 0.8em;
  position: absolute;
  right: 0;
  z-index: -1;
  bottom: 0;
  border-radius: 5em;
}

.home > a > div > span {
  background: #3aab97;
  border-radius: 5em;
  padding: 0.4em 0.9em;
  font-size: 0.4em;
  font-weight: 600;
  color: #fff;
  display: flex;
  align-items: center;
  border: #3aab97 solid 0.1em;
}

.home > a:hover > div > span {
  background: #fff;
  color: #3aab97;
}

.home > a > div > span > *:first-child {
  position: relative;
  top: 0.2em;
}
</style>