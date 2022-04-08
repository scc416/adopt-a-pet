<template>
  <div class="show-more" @click="loadMore">Show more<DownIcon /></div>
</template>

<script>
import DownIcon from "vue-material-design-icons/MenuDown.vue";

export default {
  components: { DownIcon },
  props: ["loadMore"],
};
</script>

<style>
.show-more {
  background: #e5e4e2;
  width: 100%;
  text-align: center;
  padding: 0.2em 0.5em 0.5em;
  font-size: 1.2em;
  border-radius: 15px;
  font-weight: 600;
  margin-top: 0.8em;
}

.show-more > *:first-child {
  position: relative;
  top: 0.4em;
}

.show-more .material-design-icon {
  height: 1.5em;
  width: 1.5em;
}

.show-more .material-design-icon > .material-design-icon__svg {
  height: 1.5em;
  width: 1.5em;
}
</style>