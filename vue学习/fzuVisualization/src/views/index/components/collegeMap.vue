<script>
let isClicked = false
var messageElement // 全局变量用于保存消息元素

function handleClick(event) {
  event.target.classList.add('clicked')
  isClicked = true
  var title = event.target.getAttribute('title') // 获取 title 属性的值
  if (title) {
    // 如果 title 不为空
    messageElement = document.createElement('div') // 创建一个新的 <div> 元素
    messageElement.textContent = title // 将 title 的值插入到 <div> 中
    document.body.appendChild(messageElement) // 将 <div> 插入到页面中
  }
}

function showTitle(event) {
  var title = event.target.getAttribute('title')
  if (title) {
    messageElement = document.createElement('div') // 创建一个新的 <div> 元素
    messageElement.textContent = title // 将 title 的值插入到 <div> 中
    messageElement.style.position = 'absolute' // 设置定位方式为绝对定位
    messageElement.style.top = event.clientY + 'px' // 设置 <div> 元素的 top 值
    messageElement.style.left = event.clientX + 'px' // 设置 <div> 元素的 left 值
    messageElement.style.padding = '10px' // 设置内边距
    messageElement.style.backgroundColor = '#fff' // 设置背景颜色
    messageElement.style.border = '1px solid #000' // 设置边框
    messageElement.style.borderRadius = '5px' // 设置边框圆角
    document.body.appendChild(messageElement) // 将 <div> 插入到页面中
  }
}

function hideTitle() {
  if (messageElement) {
    document.body.removeChild(messageElement) // 移除消息元素
    messageElement = null // 重置消息元素
  }
}
</script>

<template>
  <el-card class="container">
    <img src="@/assets/1.png" usemap="#map1" class="img" style="width: 500px" />

    <map name="map1">
      <area
        shape="rect"
        coords="400,200,450,230"
        onmouseover="showTitle(event)"
        onmouseout="hideTitle()"
        onclick="handleClick(event)"
        alt="Square"
        title="数计学院"
        href=""
      />
      <area
        shape="rect"
        coords="320,120,340,140"
        onmouseover="showTitle(event)"
        onmouseout="hideTitle()"
        onclick="handleClick(event)"
        alt="Square"
        title="外国语学院"
        href="http://localhost:5173/physic"
      />
      <area
        shape="rect"
        coords="30,200,80,260"
        onmouseover="showTitle(event)"
        onmouseout="hideTitle()"
        onclick="handleClick(event)"
        alt="Square"
        title="化工学院"
        href="http://localhost:5173/physic"
      />
      <area
        shape="rect"
        coords="120,160,140,180"
        onmouseover="showTitle(event)"
        onmouseout="hideTitle()"
        onclick="handleClick(event)"
        alt="Square"
        title="土木学院"
        href="http://localhost:5173/physic"
      />
      <area
        shape="rect"
        coords="450,40,475,65"
        onmouseover="showTitle(event)"
        onmouseout="hideTitle()"
        onclick="handleClick(event)"
        alt="Square"
        title="机械学院"
        href="http://localhost:5173/physic"
      />
      <area
        shape="rect"
        coords="410,120,460,160"
        onmouseover="showTitle(event)"
        onmouseout="hideTitle()"
        onclick="handleClick(event)"
        alt="Square"
        title="物信学院"
        href="http://localhost:5173/physic"
      />
    </map>
  </el-card>
</template>

<style lang="scss" scoped>
.container {
  height: 320px;
  width: 540px;
  color: #fff;
  margin: 20px;
  float: left;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  position: absolute;
  top: 120px;
  background-color: #212130;
}
</style>
