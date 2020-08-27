<template>
  <div class="wrapper">
    <input
      @input="input"
      v-model="text"
      type="search"
      autocomplete="on"
      @keyup.enter="onEnter"
      @keydown.down="onDown"
      @keydown.up="onUp"
    />
    <ul v-if="isSearch" @click="onclick">
      <item
        v-for="(item, $index) in itemList"
        :payload="item"
        :key="$index"
        class="item"
        :index="++$index"
        :counter="counter"
      ></item>
    </ul>
  </div>
</template>
<script>
import Item from "./Item.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      text: "",
      isSearch: false,
      isGet: null,
      counter: null,
      arrow: false,
      arrowUpCheck: true,
    };
  },
  components: {
    Item,
  },
  methods: {
    input(e) {
      this.isSearch = this.text !== "" ? true : false;
    },
    onEnter(e) {
      this.isSearch = false;
      if (this.arrow) {
        this.text = this.itemList[--this.counter];
        this.counter = null;
        this.arrow = false;
        return;
      }

      this.itemList.forEach((item) => {
        let string = item.toLowerCase();
        this.text = string == this.text.toLowerCase() ? item : e.target.value;
      });
    },
    onclick(e) {
      this.text = e.target.innerHTML;
      this.isSearch = false;
    },
    onDown(e) {
      this.arrow = true;
      this.counter < this.itemList.length ? this.counter++ : (this.counter = 1);
    },
    onUp(e) {
      this.arrow = true;

      if (this.arrowUpCheck) {
        this.arrowUpCheck = false;
        console.log(this.itemList.length);
        this.counter = this.itemList.length;
        return;
      }
      this.counter > 1 ? --this.counter : (this.counter = this.itemList.length);
    },
  },
  computed: {
    ...mapGetters(["GET-STATE-ITEMS"]),

    itemList() {
      if (!this.isGet) {
        return;
      }
      let char = this.text.toLowerCase();

      return this["GET-STATE-ITEMS"].filter((item) => {
        let string = item.toLowerCase();
        return string.indexOf(char) !== -1;
      });
    },
  },
  mounted() {
    this.$store
      .dispatch("GET-ITEMS", "/")
      .then((resolve) => {
        this.isGet = resolve;
      })
      .catch((error) => {
        console.log(error, "Ошибочка");
      });
  },
};
</script>
<style lang="sass">
.wrapper
	display: flex
	width: 300px
	border: 1px solid black
	padding: 20px
	flex-direction: column
	margin: 10px auto
input
	padding: 20px
	font-size: 20px
ul
	list-style: none
	cursor: pointer
.item
	padding: 10px
	&:hover
		background-color: #209420
		color: #ffff
		font-weight: bold

</style>

