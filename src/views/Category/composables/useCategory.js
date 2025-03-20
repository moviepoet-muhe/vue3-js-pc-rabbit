// 封装 分类数据 相关业务代码
import { getCategoryAPI } from '@/apis/category'
import { ref, onMounted } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'


export function useCategory() {
  // 根据后端返回的数据格式，定义响应式数据
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }

  onMounted(() => getCategory())
  // 路由参数变化的时候，可以把分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    // 使用最新的路由参数请求最新的分类数据
    getCategory(to.params.id)
  })

  // // 监听路由变化
  // watch(() => route.params.id, (newId) => {
  //   getCategory()
  // },
  //   // 立即执行
  //   { immediate: true }
  // )

  return {
    categoryData
  }
}