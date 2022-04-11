<template>
  <h2><ContactIcon />Contact</h2>
  <div class="grid">
    <div><LabelIcon /></div>
    <div>
      <span v-if="organization">{{ organization.name }}</span>
    </div>
    <div><PhoneIcon /></div>
    <div>
      <a v-if="details.phone" :href="`tel:${details.phone}`">
        {{ details.phone }}
      </a>
      <span v-else>N/A</span>
    </div>
    <div><EmailIcon /></div>
    <div>
      <a v-if="details.email" :href="`mailto: ${details.email}`">{{
        details.email
      }}</a>
      <span v-else>N/A</span>
    </div>
    <div><AddressIcon /></div>
    <div>
      <div v-for="(line, i) in details.address" :key="i">
        {{ line }}
      </div>
    </div>
  </div>
</template>

<script>
import ContactIcon from "vue-material-design-icons/HelpCircleOutline.vue";
import PhoneIcon from "vue-material-design-icons/Phone.vue";
import EmailIcon from "vue-material-design-icons/Email.vue";
import AddressIcon from "vue-material-design-icons/MapMarker.vue";
import LabelIcon from "vue-material-design-icons/LabelVariant.vue";
import { toRefs } from "@vue/reactivity";
import getOrganizationDetails from "@/composables/getOrganizationDetails";

export default {
  props: ["details", "token", "setError"],
  components: { ContactIcon, PhoneIcon, EmailIcon, AddressIcon, LabelIcon },
  setup(props) {
    const { token, setError, details } = toRefs(props);
    const organization = getOrganizationDetails(
      token,
      details.value.organizationId,
      setError
    );
    return { organization };
  },
};
</script>

<style>
</style>