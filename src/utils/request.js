// 二次封装axios
import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'
const service = axios.create({
  baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
service.interceptors.request.use(config => {
  // 1. 从pinia获取token数据
  const userStore = useUserStore()

  // 2. 按照后端的要求拼接token数据
  const token = userStore.userInfo.token
  if (token) {
    // 3. 给请求头挂载token数据
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
service.interceptors.response.use(res => res.data, e => {
  // 统一错误提示
  ElMessage({
    type: 'warning',
    message: e.response.data.message
  })
  // 401错误拦截
  if (e.response.status === 401) {
    const userStore = useUserStore()
    // 1. 清除本地用户信息 调用userStore中的action
    userStore.clearUserInfo()
    // 2. 跳转到登录页
    router.push('/login')
  }
  return Promise.reject(e)
})

export default service