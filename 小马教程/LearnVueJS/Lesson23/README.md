组件：基础的基础
========

## 知识点

* 组件（Component,Portlet）

### 组件

组件就是页面上的一小块区域内容，完成一个小的页面功能，请参照视频第六课。

## 综合例

~~~html
<div id="myApp">
    <today-weather></today-weather>
</div>
<script>
    Vue.component('today-weather', {
        template: '<div>今天下雨，出不去啦，干什么呢？看Youtube吧!</div>'
    });
    var myApp = new Vue({
        el: '#myApp', 
    });
</script>
~~~

## 课程文件

* https://git.oschina.net/komavideo/LearnVueJS

## 小马视频频道（优酷）

http://i.youku.com/komavideo
