import service from "@/utils/request";

// 获取导航栏数据
export const getCategoryAPI = () => service({ url: 'home/category/head' })
