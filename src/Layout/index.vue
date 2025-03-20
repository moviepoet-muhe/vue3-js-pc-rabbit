<!-- layout 布局 主页 -->
<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 可以添加:key="$route.fullPath" 破坏复用机制，强制销毁重建 -->
  <RouterView />
  <LayoutFooter />
</template>

<script setup>
import LayoutNav from '@/Layout/components/LayoutNav.vue'
import LayoutHeader from '@/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/Layout/components/LayoutFooter.vue'
import LayoutFixed from '@/Layout/components/LayoutFixed.vue'

// 触发获取导航列表的action
import { useCategoryStore } from '@/stores/categoryStore'
import { onMounted } from 'vue'
const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.getCategory()
})

</script>