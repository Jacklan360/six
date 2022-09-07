<template>
  <div>111</div>
</template>

<script>
import  {getData} from "./http/aip";

export default {
  name: 'App',
  setup() {
    getData.then(res => {
      console.log(res,'=')
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
