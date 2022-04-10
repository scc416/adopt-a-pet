<template>
  <div class="info">
    <h1><component :is="icon" />{{ name }}</h1>
    <div class="grid">
      <div>Status:</div>
      <div>{{ status }}</div>
      <div>Breed:</div>
      <div>{{ breed }}</div>
      <div>Gender:</div>
      <div>{{ gender }}</div>
      <div>Age:</div>
      <div>{{ age }}</div>
      <div>Size:</div>
      <div>{{ size }}</div>
      <div>Colour:</div>
      <div>{{ colour }}</div>
      <div>Coat:</div>
      <div>{{ coat }}</div>
      <div>Characteristics:</div>
      <div>{{ characteristics }}</div>
      <div>Location:</div>
      <div>{{ location }}</div>
    </div>
    <div class="description">{{ description }}</div>
    <div class="external-link">
      <a :href="url" target="_blank"> <LinkIcon />Profile on Petfinder</a>
    </div>
    <hr />
    <h2><InfoIcon />Info</h2>
    <ul>
      <li v-for="(prop, i) in info" :key="i">{{ prop }}</li>
    </ul>
    <hr />
    <h2><MailIcon />Contact</h2>
    <div class="grid">
      <div><PhoneIcon /></div>
      <div>
        <a :href="`tel:${phone}`">
          {{ phone }}
        </a>
      </div>
      <div><EmailIcon /></div>
      <div>
        <a :href="`mailto: ${email}`">{{ email }}</a>
      </div>
      <div><AddressIcon /></div>
      <div>
        <div v-for="(line, i) in address" :key="i">
          {{ line }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { getPetIcon, getFormattedInfo } from "@/helpers";
import LinkIcon from "vue-material-design-icons/Link.vue";
import InfoIcon from "vue-material-design-icons/Information.vue";
import MailIcon from "vue-material-design-icons/HelpCircleOutline.vue";
import PhoneIcon from "vue-material-design-icons/Phone.vue";
import EmailIcon from "vue-material-design-icons/Email.vue";
import AddressIcon from "vue-material-design-icons/MapMarker.vue";

export default {
  props: ["details"],
  components: {
    LinkIcon,
    InfoIcon,
    MailIcon,
    PhoneIcon,
    EmailIcon,
    AddressIcon,
  },
  setup(props) {
    const { details } = toRefs(props);
    const icon = getPetIcon(details.value.type);
    const formattedDetails = getFormattedInfo(details);
    return { ...formattedDetails, icon };
  },
};
</script>

<style>
.info {
  background: #f9f9f9;
  padding: 3em 4em;
  border-radius: 1em;
  width: 60%;
}

.description {
  line-height: 2;
}

.info > hr {
  border: #e9e9e9 solid 1px;
}

.info h1 {
  color: #3aab97;
}

.info h2 > *:first-child {
  color: #3aab97;
}

.info > div {
  margin: 1.2em 0;
}

.info > div.external-link {
  margin: 1.5em 0;
}

.info ul {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  column-gap: 2em;
  margin-bottom: 3em;
}

.info li {
  line-height: 2.5;
}

.info h1 .material-design-icon,
.info h2 .material-design-icon {
  height: 1.2em;
  width: 1.2em;
}

.info h1 .material-design-icon > .material-design-icon__svg,
.info h2 .material-design-icon > .material-design-icon__svg {
  height: 1.2em;
  width: 1.2em;
}

.info h1 > *:first-child {
  position: relative;
  top: 0.25em;
  margin-right: 0.15em;
}

.info h2 > *:first-child {
  position: relative;
  top: 0.25em;
  margin-right: 0.25em;
}

.grid {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-row-gap: 0.5em;
  grid-column-gap: 1.3em;
}

.grid > div:nth-child(even) {
  font-weight: 600;
}

.info > div.external-link > a {
  background: #3aab97;
  border-radius: 5em;
  font-weight: 600;
  border: #3aab97 solid 0.1em;
  padding: 0.4em 0.9em;
  text-decoration: none;
  color: #fff;
  font-size: 0.85em;
}

.info > div.external-link > a:hover {
  background: #fff;
  color: #3aab97;
}

.info > div.external-link > a > *:first-child {
  position: relative;
  top: 0.25em;
  margin-right: 0.3em;
}

.info > div.external-link > a .material-design-icon {
  height: 1.2em;
  width: 1.2em;
}
.info
  > div.external-link
  > a
  .material-design-icon
  > .material-design-icon__svg {
  height: 1.2em;
  width: 1.2em;
}
</style>