// 封装所有和用户相关的接口函数
import service from "@/utils/request";

// 登录
export const loginAPI = ({ account, password }) => service(
  {
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  }
)

// 个人中心 猜你喜欢
export const getUserLikeAPI = ({ limit = 4 }) => service(
  {
    url: '/goods/relevant',
    params: {
      limit
    }
  }
)
