// 订单页 接口
import service from "@/utils/request";

// 获取订单详情接口
export const getCheckInfoAPI = () => service({
  url: '/member/order/pre',
})

// 创建订单接口
export const createOrderAPI = (orderInfo) => service({
  url: '/member/order',
  method: 'POST',
  data: orderInfo
})