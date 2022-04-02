<template>
  <div class="home">
    <div>
      Find
      <span>the perfect pet </span>
      <div></div>
    </div>
    <div>that fits you</div>
    <div><span>Start Matching</span></div>
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
  align-items: flex-start;
  font-size: 2em;
  font-weight: 500;
}

.home > div {
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
  background: #3aab97;
  width: 10em;
  height: 0.8em;
  position: absolute;
  right: 0;
  z-index: -1;
  bottom: 0;
  border-radius: 5em;
}

.home > div:nth-child(3) > span {
  background: #3aab97;
  border-radius: 5em;
  padding: 0.9em 1.2em;
  font-size: 0.4em;
  font-weight: 600;
  color: #fff;
}
</style>