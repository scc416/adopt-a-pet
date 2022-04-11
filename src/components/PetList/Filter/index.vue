<template>
  <div v-if="details" class="filter">
    <div>
      <div>
        <Select
          :options="details.type"
          :title="'Types'"
          @updateFilter="updateFilter"
          :keyName="'type'"
          :multiSelect="false"
        />
      </div>
      <div v-if="filter.type">
        <div v-for="(option, i) in details[filter.type.name]" :key="i">
          <Select
            v-if="option.length"
            :options="option"
            :title="'Types'"
            @updateFilter="updateFilter"
            :keyName="'type'"
            :multiSelect="false"
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
import { toRefs } from "@vue/reactivity";
import useFilter from "@/composables/useFilter";

export default {
  emit: ["submitFilter", "setError"],
  props: ["token"],
  components: { Select },
  setup(props, { emit }) {
    const { token } = toRefs(props);
    const details = getAnimalTypes(token, emit);
    const { filter, updateFilter } = useFilter();

    const submitFilter = () => emit("submitFilter", filter);

    return { submitFilter, updateFilter, details, filter };
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
}

.filter > div > div > div {
  margin-top: 1em;
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