
<template>
  <div id="app">
    <CalculatorAction/>
  </div>
</template>

<script>
import CalculatorAction from "@/components/CalculatorAction";
export default {
  name: 'App',
  components: {
    CalculatorAction,
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
}
</style>
