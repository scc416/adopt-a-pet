<template>
  <div v-if="details" class="details">
    <PhotoAlbum :photos="details.photos" />
    <Details />
  </div>
  <Spin v-if="loading" />
</template>

<script>
import { useRoute } from "vue-router";
import { toRefs } from "@vue/reactivity";
import getPetDetails from "@/composables/getPetDetails";
import Spin from "../components/Spin.vue";
import PhotoAlbum from "@/components/PetDetails/PhotoAlbum.vue";
import Details from "@/components/PetDetails/Info.vue";

export default {
  props: ["token", "error"],
  components: { Spin, PhotoAlbum, Details },
  setup(props) {
    const { token, error } = toRefs(props);
    const { params } = useRoute();
    const { id } = params;
    const { details, loading } = getPetDetails(id, token, error);
    return { details, loading };
  },
};
</script>

<style scoped>
.details {
  display: flex;
  justify-content: space-between;
}
</style>