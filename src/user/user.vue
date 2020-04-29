<template>
    <div>
      <h2>啊哈哈</h2>
      <router-link :to="'/index/'+userId" tag="button">点击</router-link>
      <router-link to="/user/message" tag="button">消息</router-link>
      <router-link :to="obj" tag="button">新闻</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "user",
      data(){
          return {
            userId:'hjj',
            obj:{
              path:'/user/news',
              query:{
                name:'hjj',
                sex:'nan',
                other:'wuae'
              }
            }
          }
      }
    }
</script>

<style scoped>

</style>
