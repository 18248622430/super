<template>
  <div>
    <h2>这是首页</h2>
    <p>hhhhhhhhhh</p>
    <p @click="gogo">{{$route.params.name}}</p>
  </div>
</template>

<script>
  export default {
    name: "index",
    methods:{
      gogo(){
        console.log(this.$route.params);
      }
    }
  }
</script>

<style scoped>

</style>
