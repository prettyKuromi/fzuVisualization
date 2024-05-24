import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ECharts from 'vue-echarts' // 全局引入ECharts
import 'echarts' // 全局引入echarts
// 挂载ECharts   参数1:vue文件中挂载echarts的名字  参数2:挂载的组件

const app = createApp(App)

app.use(createPinia())
app.use(router)
//echarts
app.component('ECharts', ECharts)

app.mount('#app')
