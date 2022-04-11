<template>
  <div v-if="details" class="details">
    <PhotoAlbum :photos="details.photos" :videos="details.videos" />
    <Info :details="details" :token="token" :error="error" />
  </div>
  <Spin v-if="loading" />
</template>

<script>
import { useRoute } from "vue-router";
import { toRefs } from "@vue/reactivity";
import getPetDetails from "@/composables/getPetDetails";
import Spin from "../components/Spin.vue";
import PhotoAlbum from "@/components/PetDetails/PhotoAlbum/";
import Info from "@/components/PetDetails/Info/";

export default {
  props: ["token", "error"],
  components: { Spin, PhotoAlbum, Info },
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
  align-items: flex-start;
}
</style>