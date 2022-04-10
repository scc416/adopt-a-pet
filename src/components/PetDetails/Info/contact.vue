<template>
  <h2><ContactIcon />Contact</h2>
  <div class="grid">
    <div><PhoneIcon /></div>
    <div>
      <a :href="`tel:${details.phone}`">
        {{ details.phone }}
      </a>
    </div>
    <div><EmailIcon /></div>
    <div>
      <a :href="`mailto: ${details.email}`">{{ details.email }}</a>
    </div>
    <div><AddressIcon /></div>
    <div>
      <div v-for="(line, i) in details.address" :key="i">
        {{ line }}
      </div>
    </div>
    <div></div>
    <div>{{ organization && organization.name }}</div>
  </div>
</template>

<script>
import ContactIcon from "vue-material-design-icons/HelpCircleOutline.vue";
import PhoneIcon from "vue-material-design-icons/Phone.vue";
import EmailIcon from "vue-material-design-icons/Email.vue";
import AddressIcon from "vue-material-design-icons/MapMarker.vue";
import { toRefs } from "@vue/reactivity";
import getOrganizationDetails from "@/composables/getOrganizationDetails";

export default {
  props: ["details", "token", "error"],
  components: { ContactIcon, PhoneIcon, EmailIcon, AddressIcon },
  setup(props) {
    const { token, error, details } = toRefs(props);
    const organization = getOrganizationDetails(
      token,
      details.value.organizationId,
      error
    );
    return { organization };
  },
};
</script>

<style>
</style>