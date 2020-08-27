<template>
  <li :style="style">{{item}}</li>
</template>
<script>
export default {
  props: ["payload", "index", "counter"],
  computed: {
    item() {
      return this.payload;
    },
    style() {
	      return this.counter == this.index
        ? "background-color: #209420; color: #ffff; font-weight: bold"
        : "";
    },
  },
};
</script>
<style lang="sass">

</style>