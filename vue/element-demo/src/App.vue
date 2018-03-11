<template>
  <div id="app">
    <el-button>默认按钮</el-button>
<el-button type="primary" icon="search">主要按钮</el-button>
<el-button type="text">文字按钮</el-button>
<span  class="el-icon-edit"></span>
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark">我是谁</div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">1</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">3</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">4</div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="16"><div class="grid-content bg-purple">5</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">6</div></el-col>
</el-row>
<el-row type="flex" class="row-bg">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="10">
  <el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple">1</div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple-light">2</div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple">3</div></el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple-light">4</div></el-col>
</el-row>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="search">搜索</el-button>
<el-button>默认按钮</el-button>
<el-button type="primary" :disabled="true">主要按钮</el-button>
<el-button type="text" >文字按钮</el-button>
<div class="block">
  <span class="demonstration">默认显示颜色</span>
  <span class="wrapper">
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button type="info">信息按钮</el-button>
  </span>
  <div class="block">
  <span class="demonstration">hover 显示颜色</span>
  <span class="wrapper">
    <el-button :plain="true" type="success">成功按钮</el-button>
    <el-button :plain="true" type="warning">警告按钮</el-button>
    <el-button :plain="true" type="danger">危险按钮</el-button>
    <el-button :plain="true" type="info">信息按钮</el-button>
  </span>
</div>
</div>
<el-button type="primary" icon="edit"></el-button>
<el-button type="primary" icon="share"></el-button>
<el-button type="primary" icon="delete"></el-button>
<el-button type="primary" icon="search">搜索</el-button>
<el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
<el-button-group>
  <el-button type="primary" icon="arrow-left">上一页</el-button>
  <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>
<el-button-group>
  <el-button type="primary" icon="edit"></el-button>
  <el-button type="primary" icon="share"></el-button>
  <el-button type="primary" icon="delete"></el-button>
</el-button-group>
<el-button type="primary" :loading="true">加载中</el-button>
<el-button type="primary" size="large">大型按钮</el-button>
<el-button type="primary">正常按钮</el-button>
<el-button type="primary" size="small">小型按钮</el-button>
<el-button type="primary" size="mini">超小按钮</el-button>
  </div>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped="scoped">
.grid-content{
	border: 1px solid #000;
	height: 30px;
	text-align: center;
	line-height: 30px;
}
</style>
