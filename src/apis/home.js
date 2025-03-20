import service from "@/utils/request";

// 获取轮播图数据
export const getBannerAPI = (params = {}) => {
  // 解构参数，默认值为1，1为首页，2为分类商品页
  const { distributionSite = '1' } = params;
  return service({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

// 获取新鲜好物
export const findNewAPI = () => service({ url: '/home/new' })

// 获取人气推荐
export const getHotAPI = () => service({ url: '/home/hot' })

// 获取商品区块数据
export const getGoodsAPI = () => service({ url: '/home/goods' })