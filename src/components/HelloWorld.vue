<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="run">Go</button>
    <button @click="runBackgroundSync">Background sync</button>
    <div v-for="i in data" :key="i.id">
      titre : {{ i.title }}
      <br />
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      data: "",
    };
  },
  methods: {
    run() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then((e) => console.log(e))
        .catch((e) => console.log(e));
    },
    runBackgroundSync() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts")
        .then((e) => (this.data = e.data))
        .catch((e) => console.log(e));
    },
  },
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
