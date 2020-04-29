<template>
  <div>
    <h2>这是新闻</h2>
    <p>{{news}}</p>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.sex}}</p>
    <p>{{$route.query.other}}</p>
  </div>
</template>

<script>
  export default {
    name: "userNew",
    data(){
      return {
        news:'今天天气不错'
      }
    }
  }
</script>

<style scoped>

</style>
