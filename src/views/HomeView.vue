<template>
  <div class="home">
    <div>Find <span>the perfect pet</span></div>
    <div>that fits you</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home {
  background-image: url("../assets/home-background.jpg");
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2em;
}

.home > div {
  position: relative;
  left: calc(2.8em + 8vw);
  bottom: 4vh;
}

.home > div > span {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.2em;
}
</style>