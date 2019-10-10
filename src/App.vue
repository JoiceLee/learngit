<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <side></side>
    <mycontent></mycontent>
    <childslot>
            <h2 slot="header">标题</h2>
            <p>正文内容</p>
            <p>更多正文内容</p>
            <p slot="footer">底部信息</p>
            <p>更多正文内容</p>
    </childslot>

    <inputcomp v-model="value" :max="10" :min="0"></inputcomp>

    <tabs v-model="activeKey">
      <pane label="标签一" name="1">标签一的内容1</pane>
      <pane label="标签二" name="2">标签二的内容2</pane>
      <pane label="标签三" name="3">标签三的内容3</pane>
    </tabs>

  </div>
</template>

<script>
import side from './components/Side'
import mycontent from './components/Content'
import childslot from './components/Childslot'
import inputcomp from './components/InputComp'
import tabs from './components/tabs'
import pane from './components/panes'


export default {
  name: 'App',
  data: function(){
    return {value:5,activeKey:'1'}
  },
  components: {
    side,
    mycontent,
    childslot,
    inputcomp,
    tabs,
    pane
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
