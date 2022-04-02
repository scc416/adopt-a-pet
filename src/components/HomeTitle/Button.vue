<template>
  <router-link :to="{ name: 'pets' }">
    <div>
      <span><SearchIcon />Start Looking</span>
    </div>
  </router-link>
</template>

<script>
import SearchIcon from "vue-material-design-icons/Magnify.vue";

export default {
  components: { SearchIcon },
};
</script>
