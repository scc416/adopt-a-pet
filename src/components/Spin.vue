<template>
  <div class="cover">
    <div class="spin"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.cover {
  width: 100vw;
  height: 100vh;
  background: #ffffff55;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.spin {
  display: block;
  width: 5em;
  height: 5em;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #e5e4e2;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotateZ(360deg);
  }
}
</style>