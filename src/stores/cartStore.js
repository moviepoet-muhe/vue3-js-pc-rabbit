// 管理购物车数据
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {
  // 判断用户是否登录
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)

  // 定义state - cartList
  const cartList = ref([])

  // 定义 action 抽象获取最新购物车列表数据的方法 方便复用
  const getNewCartList = async () => {
    // 重新从接口获取最新购物车列表
    const res = await findNewCartListAPI()
    // 用接口数据替换掉本地的购物车数据
    cartList.value = res.result
  }

  // 定义 action 添加购物车 - addCart
  const addCart = async (goods) => {
    const { skuId, count } = goods
    // 判断用户是否登录
    if (isLogin.value) {
      // 登录之后 加入购物车   
      await insertCartAPI({ skuId, count })
      // 重新从接口获取最新购物车列表
      getNewCartList()
      console.log('重新从接口获取最新购物车列表' + cartList.value);
    } else {
      // 未登录 本地加入购物车
      // 已添加过 - count + 1，没有添加过 - 直接push
      // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        // 找到了，将传入的商品数量累加到已有数量上
        item.count += goods.count;
      } else {
        // 没找到
        cartList.value.push(goods)
      }
    }
  }

  // 定义 action 删除购物车
  const delCart = async (skuId) => {
    // 判断用户是否登录
    if (isLogin.value) {
      // 调用接口 实现接口购物车删除功能
      await delCartAPI([skuId])
      // 重新从接口获取最新购物车列表
      getNewCartList()
    } else {
      // 未登录 本地删除购物车
      // 1. 找到要删除项的下标值 - splice
      // 2. 使用数组的过滤方法 - filter
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
    }



  }

  // 定义 action 清除购物车
  const clearCart = () => {
    cartList.value = []
  }

  // action 单选功能
  const singleCheck = (skuId, selected) => {
    // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
    const item = cartList.value.find((item) => skuId === item.skuId)
    item.selected = selected
  }

  // action 全选功能
  const allCheck = (selected) => {
    // 把cartList中的每一项的selected都设置为当前的全选框状态
    cartList.value.forEach(item => item.selected = selected)
  }

  // 计算属性 
  // 1. 购物车总的数量 - allCount
  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
  // 2. 购物车总价 - allPrice
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

  // 已选择商品数量合计
  const selectedCount = computed(() => cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count, 0))
  // 已选择商品价格合计
  const selectedPrice = computed(() => cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count * c.price, 0))


  // 是否全选
  const isAll = computed(() => cartList.value.every((item) => item.selected))


  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    allCheck,
    isAll,
    selectedCount,
    selectedPrice,
    clearCart,
    getNewCartList,
  }
}, {
  // 开启数据持久化
  persist: true,
})