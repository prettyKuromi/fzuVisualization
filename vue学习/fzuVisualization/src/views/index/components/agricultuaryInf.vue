<script setup>
// 领域简介
</script>

<template>
  <el-card class="performanceContainer">
    <div>
      <div class="sub">
        农业科学是研究农业发展的自然规律和经济规律的学科，学科涉及了关于农业环境、农业作物和畜牧生产、农业工程和农业经济学等多样学科的交叉内容。
      </div>
      <img src="@/assets/农学.png" alt="" class="img" />
      <div class="inf">
        <div class="name">吕旭聪博士</div>
        现任福州大学研究员、博士生导师（破格晋升）。主要从事食药用菌、益生菌和发酵食品等农产品和食品加工领域的研究，曾获福建省“杰出青年”科学基金，入选福建省高校“杰出青年”科研人才、福州大学“旗山学者”奖励计划、福建农林大学“金山学者”青年人才和校“杰出青年”科研人才。
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
  top: 90px;
  left: 10px;
}
.inf {
  position: absolute;
  top: 90px;
  left: 200px;
  width: 300px;
  .name {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
