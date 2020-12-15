<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button class="btn btn-success" @click="send"> Send Form</button>
   <input type="text" v-model="form.first_name">
   <input type="text" v-model="form.last_name">
    {{fullName}}
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  data(){
    return {
      counter:0,
      form:{
        first_name:'Maria',
        last_name: 'Abrahamyan'
      }
    }
  },
  computed:{
    fullName (){
      return `${this.form.first_name} ${this.form.last_name}`
    }
  },
  methods:{
    send(){
      console.log(this.form)
    },
    increment(){
      this.counter++
    }
  },
  watch:{
  },
  beforeCreate() {
    console.log('BEFORE CREATED')
  },
  created() {
    console.log(' CREATED')

  },
  beforeMount() {
    console.log('BEFORE Mounted')
  },

  mounted(){
    console.log('Mounted')

  },
  beforeDestroy() {
    console.log('BEFORE Destroyed')

  },
  destroyed() {
    console.log('Destroyed')

  },
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
