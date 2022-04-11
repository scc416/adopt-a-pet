<template>
  <div v-if="details" class="filter">
    <div>
      <div>
        <Select
          :options="details.type"
          :title="'Type of pet'"
          @updateFilter="updateFilter"
          :keyName="'type'"
          :multiSelect="false"
        />
      </div>
      <div v-if="breeds">
        <Select
          :options="breeds"
          :title="'Breeds'"
          @updateFilter="updateFilter"
          :keyName="'breed'"
          :multiSelect="true"
        />
      </div>
      <div
        v-for="(option, i) in filter.type ? details[filter.type.name] : []"
        :key="i"
      >
        <Select
          :options="option"
          :title="i[0].toUpperCase() + i.slice(1)"
          @updateFilter="updateFilter"
          :keyName="i"
          :multiSelect="true"
        />
      </div>
    </div>
    <button @click="submitFilter()">Filter</button>
  </div>
</template>

<script>
import Select from "./Select.vue";
import getAnimalTypes from "@/composables/getAnimalTypes";
import { toRefs } from "@vue/reactivity";
import useFilter from "@/composables/useFilter";
import getAnimalBreeds from "@/composables/getAnimalBreeds";

export default {
  emit: ["submitFilter", "setError"],
  props: ["token"],
  components: { Select },
  setup(props, { emit }) {
    const { token } = toRefs(props);
    const details = getAnimalTypes(token, emit);
    const { filter, updateFilter } = useFilter();
    const breeds = getAnimalBreeds(token, filter, emit);

    const submitFilter = () => emit("submitFilter", filter);

    return { submitFilter, updateFilter, details, filter, breeds };
  },
};
</script>

<style>
.filter {
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-bottom: 1em;
}

.filter > div {
  width: 100%;
  display: grid;
  grid-row-gap: 0.7em;
  grid-column-gap: 1em;
  grid-template-columns: 1fr 1fr 1fr;
}

.filter > button {
  margin-left: 1em;
  width: auto;
  background: #3aab97;
  border-radius: 0.5em;
  font-weight: 600;
  border: #3aab97 solid 0.1em;
  padding: 0.4em 0.9em;
  text-decoration: none;
  color: #fff;
  font-size: 1.05em;
}

.filter > button:hover {
  background: #fff;
  color: #3aab97;
}
</style>