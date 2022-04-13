import { ref } from "vue";

const useControl = (emit) => {
  const showFilter = ref(false);
  const showSort = ref(false);
  const location = ref(null);
  let locate = null;

  const toggleFilter = () => {
    showFilter.value = !showFilter.value;
    if (showFilter.value) showSort.value = false;
  };

  const toggleSort = () => {
    showSort.value = !showSort.value;
    if (showSort.value) showFilter.value = false;
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { coords } = position;
        const { latitude, longitude } = coords;
        locate = `${latitude},${longitude}`;
        location.value = locate;
      },
      (e) => emit("setError", e.message)
    );
  };

  const toggleLocation = () => {
    console.log(location.value);
    if (location.value) return (location.value = null);
    if (!location.value && !locate) return getLocation();
    location.value = locate;
  };

  return {
    showFilter,
    showSort,
    toggleFilter,
    toggleSort,
    toggleLocation,
    location,
  };
};

export default useControl;
