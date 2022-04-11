<template>
  <div v-if="details" class="details">
    <PhotoAlbum :photos="details.photos" :videos="details.videos" />
    <Info :details="details" :token="token" @setError="setError" />
  </div>
  <Spin v-if="loading" />
</template>

<script>
import { useRoute } from "vue-router";
import { toRefs } from "@vue/reactivity";
import getPetDetails from "@/composables/getPetDetails";
import Spin from "../components/Spin.vue";
import PhotoAlbum from "@/components/PetDetails/MediaAlbum/";
import Info from "@/components/PetDetails/Info/";

export default {
  emits: ["setError"],
  props: ["token"],
  components: { Spin, PhotoAlbum, Info },
  setup(props, { emit }) {
    const { token, error } = toRefs(props);
    const { params } = useRoute();
    const { id } = params;
    const { details, loading } = getPetDetails(id, token, error);
    const setError = (e) => emit("setError", e);
    return { details, loading, setError };
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