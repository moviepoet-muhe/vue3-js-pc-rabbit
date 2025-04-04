// 封装banner 轮播图相关业务代码
import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home'


export function useBanner() {

  const bannerList = ref([])

  const getBanner = async () => {
    const res = await getBannerAPI({
      // 默认值为1，1为首页，2为分类商品页
      distributionSite: '2'
    })
    bannerList.value = res.result
  }

  onMounted(() => getBanner())

  return { bannerList }
}