<template>
  <div class="info">
    <MainSection :details="formattedDetails" />
    <hr />
    <InfoSection :info="formattedDetails.info" />
    <hr />
    <ContactSection :details="formattedDetails" :token="token" :setError="setError" />
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { getPetIcon, getFormattedInfo } from "@/helpers";
import MainSection from "./main.vue";
import InfoSection from "./info.vue";
import ContactSection from "./contact.vue";

export default {
  props: ["details", "token", "setError"],
  components: {
    ContactSection,
    MainSection,
    InfoSection,
  },
  setup(props) {
    const { details } = toRefs(props);
    const icon = getPetIcon(details.value.type);
    const formattedDetails = getFormattedInfo(details);
    return { formattedDetails, icon };
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
  margin-bottom: 1.5em;
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