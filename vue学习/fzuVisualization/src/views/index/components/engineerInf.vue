<script setup>
// 领域简介
</script>

<template>
  <el-card class="performanceContainer">
    <div>
      <div class="sub">
        工程学旨在设计、开发和改进各种产品、服务、结构和系统，以满足社会的实际需求。
      </div>
      <img src="@/assets/工程.jpg" alt="" class="img" />
      <div class="inf">
        <div class="name">钟舜聪教授</div>
        长期致力于智能传感与诊断、光学和太赫兹仪器、无损检测和定量评价、精密仪器与智能测控等方面的研究。先后在MSSP、IEEE
        Trans.等发表论文240余篇(其中SCI收录119篇，多篇ESI高被引论文)，出版英文专著4部（其中１部获国家科学技术学术著作出版基金资助）、获授权国家发明专利58件、美国专利1件、英国专利1件和软著13件。
      </div>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.performanceContainer {
  height: 300px;
  width: 500px;
  position: relative;
  color: #fff;
  margin: 20px;
  float: left;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  background-color: #212130;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.sub {
  font-size: 16px;
}
.img {
  position: absolute;
  width: 170px;
  top: 80px;
  left: 10px;
}
.inf {
  position: absolute;
  top: 80px;
  left: 200px;
  width: 280px;
  .name {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
