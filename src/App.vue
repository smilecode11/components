<template>
  <div id="app">
    <div class="left-bar">
      <router-link to="/search-tree">Search Tree</router-link>
      <router-link to="/search-tree-v2">SearchTree Popper</router-link>
      <router-link to="/select-test">Select Test</router-link>
      <router-link to="/calendar-test">Calendar Test</router-link>
      <router-link to="/search-select-list">SearchSelectList</router-link>

      <!-- SearchSelectList -->
    </div>
    <div class="right-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
*{margin: 0;padding: 0;}
#app {
  display: flex;
  width: 100vw;
  height: 100vh;
}
a{
  margin-top: 12px;
  text-decoration: unset;
  color:burlywood
}
a.router-link-active{
  font-size: 24px;
  color: deepskyblue;
  border-bottom: 1px solid rgb(47, 47, 179);
}
.left-bar{
  flex: 0 0 220px;
  border-right: 1px solid #2c3e5048;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.right-main{
  padding: 12px;
  flex:1;
}
</style>
