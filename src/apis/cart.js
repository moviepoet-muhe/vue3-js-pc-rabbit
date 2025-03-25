// 用户登录后 封装请求购物车接口
import service from "@/utils/request";
// 加入购物车车
export const insertCartAPI = ({ skuId, count }) => service({
  url: '/member/cart',
  method: 'POST',
  data: {
    skuId,
    count
  }
})

// 获取最新购物车列表
export const findNewCartListAPI = () => service({
  url: '/member/cart'
})

// 删除购物车
export const delCartAPI = (ids) => service({
  url: '/member/cart',
  method: 'DELETE',
  data: {
    ids
  }
})

// 合并 用户在未登录时的购物车 和 登录后 服务器购物车 的数据
export const mergeCartAPI = (data) => service({
  url: '/member/cart/merge',
  method: 'POST',
  data
})
