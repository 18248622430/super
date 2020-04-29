<template>
  <div id="app">
    <div class="tabbar">
      <router-link class="tabbar-item" to="/home" tag="div">
        <img src="./assets/img/tabbar/home.svg" height="30" alt="">
        <div>首页</div>
      </router-link>
      <router-link class="tabbar-item" to="/category" tag="div">
        <img src="./assets/img/tabbar/category.svg" height="30" alt="">
        <div>分类</div>
      </router-link>
      <router-link class="tabbar-item" to="/profile" tag="div">
        <img src="./assets/img/tabbar/shopcart.svg" height="30" alt="">
        <div>购物车</div>
      </router-link>
      <router-link class="tabbar-item" to="/shopcart" tag="div">
        <img src="./assets/img/tabbar/profile.svg" height="30" alt="">
        <div>我的</div>
      </router-link>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
<style>
  @import "assets/css/base.css";

  .tabbar {
    display: flex;
    background-color: #eee;

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .tabbar-item {
    flex: 1;
    font-size: 12px;
    text-align: center;
  }
</style>
