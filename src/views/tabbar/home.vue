<template>
  <div>
    <div>首页</div>
    <div>ahah{{$store.state.count}}</div>
    <button @click="jia">+</button>
    <button @click="jian">-</button>
  </div>
</template>

<script>
  export default {
    name: "Tabbar",
    methods:{
      jia(){
        this.$store.commit('add')
      },
      jian(){
        this.$store.commit('down')
      }
    }
  }
</script>

<style scoped>

</style>
