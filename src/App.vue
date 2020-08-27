<template>
  <div id="app">
    <div>
      Массив:[
      "Список 1",
      "Список 2",
      "Список 3",
      "Список 4",
      "Список 5",
      "Список 6",
      "Список 7",
      "Список 8",
      "Список 9",
      "Список 10",
      "Дже",
      "Джо",
      "Лео"]
    </div>
    <list></list>
  </div>
</template>

<script>
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    List,
  },
};
</script>

<style lang="sass">
*
	margin: 0
	padding: 0
	box-sizing: border-box

#app
	font-family: Avenir, Helvetica, Arial, sans-serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	text-align: center
	color: #2c3e50
	margin-top: 60px
</style>

