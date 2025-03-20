import service from "@/utils/request";


// 获取分类列表数据，通过id参数来实现面包屑
export const getCategoryAPI = (id) => service({
  url: '/category',
  params: { id }
})

// 获取二级分类列表数据，
export const getCategoryFilterAPI = (id) =>
  service({
    url: '/category/sub/filter',
    params: { id }
  })


/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) =>
  service({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  });