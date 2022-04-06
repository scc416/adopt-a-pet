<template>
  <div class="load-more" @click="loadMore">Load more<DownIcon /></div>
</template>

<script>
import DownIcon from "vue-material-design-icons/MenuDown.vue";

export default {
  components: { DownIcon },
  props: ["loadMore"],
};
</script>

<style>
.load-more {
  background: #e5e4e2;
  width: 100%;
  text-align: center;
  padding: 0.2em 0.5em 0.5em;
  font-size: 1.2em;
  border-radius: 15px;
  font-weight: 600;
  margin-top: 0.8em;
}

.load-more > *:first-child {
  position: relative;
  top: 0.4em;
}

.load-more .material-design-icon {
  height: 1.5em;
  width: 1.5em;
}

.load-more .material-design-icon > .material-design-icon__svg {
  height: 1.5em;
  width: 1.5em;
}
</style>