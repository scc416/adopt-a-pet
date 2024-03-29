<template>
  <div class="filter" v-if="details">
    <div class="filter-option">
      <Dragbar v-if="location" @distanceChange="updateDistance" />
      <div>
        <div>
          <label class="typo__label">Name</label>
          <div><input type="text" class="text" v-model="name" /></div>
        </div>
        <div>
          <Select
            :options="details.type"
            :title="'Type of pet'"
            @updateFilter="updateFilter"
            :keyName="'type'"
            :multiSelect="false"
          />
        </div>
        <div v-for="(option, i) in filterOptionsMulti" :key="i">
          <Select
            :options="option"
            :title="i"
            @updateFilter="updateFilter"
            :keyName="i"
            :multiSelect="true"
          />
        </div>
        <div v-for="(option, i) in filterOptions" :key="i">
          <Select
            :options="option"
            :title="i"
            @updateFilter="updateFilter"
            :keyName="i"
            :multiSelect="false"
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
        <div v-if="breeds">
          <Select
            :options="breeds"
            :title="'Breeds'"
            @updateFilter="updateFilter"
            :keyName="'breed'"
            :multiSelect="true"
          />
        </div>
      </div>
    </div>
    <button @click="submitFilter()">Filter</button>
  </div>
</template>

<script>
import Select from "./Select.vue";
import getAnimalTypes from "@/composables/getAnimalTypes";
import { ref, toRefs } from "@vue/reactivity";
import useFilter from "@/composables/useFilter";
import getAnimalBreeds from "@/composables/getAnimalBreeds";
import {
  filterOptions,
  filterOptionsMulti,
  defaultDistance,
} from "@/constants";
import { makeValidOptions } from "@/helpers";
import Dragbar from "./Dragbar.vue";

export default {
  emits: ["submitFilter", "setError"],
  props: ["token", "location"],
  components: { Select, Dragbar },
  setup(props, { emit }) {
    const { token, location } = toRefs(props);
    const details = getAnimalTypes(token, emit);
    const { filter, updateFilter, name } = useFilter();
    const breeds = getAnimalBreeds(token, filter, emit);
    const distance = ref(defaultDistance);
    const updateDistance = (d) => (distance.value = d);
    const submitFilter = () =>
      emit("submitFilter", null, location, filter, name, distance);
    return {
      submitFilter,
      updateFilter,
      details,
      filter,
      breeds,
      filterOptions: makeValidOptions(filterOptions),
      name,
      filterOptionsMulti: makeValidOptions(filterOptionsMulti),
      location,
      updateDistance,
    };
  },
};
</script>

<style>
.drag-bar > *:nth-child(2) {
  margin: 1em 0;
}

.filter input.text {
  color: #39495c;
  width: 100%;
  height: 100%;
  font-size: 16px;
  padding: 8px 8px 8px 13px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  min-height: 40px;
}

.filter {
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-bottom: 1em;
}

.filter-option {
  flex-grow: 1;
  width: 100%;
}

.filter > div > div:last-child {
  display: grid;
  grid-row-gap: 0.7em;
  grid-column-gap: 1em;
  grid-template-columns: 1fr 1fr 1fr;
}

.filter button {
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
  background: #ffffff00;
  color: #3aab97;
}
</style>