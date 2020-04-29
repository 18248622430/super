<template>
  <div>
    <h2>这是消息</h2>
    <p>{{msg}}</p>
  </div>
</template>

<script>
  export default {
    name: "userMessage",
    data() {
      return {
        msg: '这个消息怎么样?'
      }
    }
  }
</script>

<style scoped>

</style>
