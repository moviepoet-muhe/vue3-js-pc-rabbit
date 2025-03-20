// 订单提交成功页 接口
import service from "@/utils/request";

export const getOrderAPI = (id) => service({
  url: `/member/order/${id}`,
})


