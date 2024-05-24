<script setup>
// 领域简介
</script>

<template>
  <el-card class="performanceContainer">
    <div>
      <div class="sub">
        福大化学系由中国科学院院士卢嘉锡亲创，制定了“理工结合，基础与应用并重”的发展路线。研究物质的组成、结构、性质以及这些物质之间的转化规律。
      </div>
      <img src="@/assets/化学.jpg" alt="" class="img" />
      <div class="inf">
        <div class="name">卢嘉锡院士</div>
        中国结构化学的开拓者和奠基人、教育家。在结构化学研究工作中有杰出贡献，曾提出固氮酶活性中心的结构模型，从事结构与性能的关系研究等，对中国原子簇化学的发展起了重要推动作用，他所指导的新技术晶体材料科学研究，也取得了重大成绩。
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
  width: 200px;
  top: 100px;
  left: 10px;
}
.inf {
  position: absolute;
  top: 90px;
  left: 220px;
  width: 260px;
  .name {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
