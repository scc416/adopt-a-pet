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
  </div>
</template>

<script>
import ContactIcon from "vue-material-design-icons/HelpCircleOutline.vue";
import PhoneIcon from "vue-material-design-icons/Phone.vue";
import EmailIcon from "vue-material-design-icons/Email.vue";
import AddressIcon from "vue-material-design-icons/MapMarker.vue";

export default {
  props: ["details"],
  components: { ContactIcon, PhoneIcon, EmailIcon, AddressIcon },
};
</script>

<style>
</style>