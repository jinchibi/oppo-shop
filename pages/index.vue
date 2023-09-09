<template>
    <div class="home">
        <div class="wrapper content">
            <swiper :banners="banners"></swiper>
            <tab-category :categorys="categorys" @item-click="handleItemClick"></tab-category>
            <template v-for="category in categorys" :key="category.id">
                <section-category :category="category"></section-category>
            </template>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { useHomeStore } from "@/store/home"
// 获取轮播图数据
const homeStore = useHomeStore()
const { banners, categorys } = storeToRefs(homeStore)
const router = useRouter();

// 跳转到详情页面
function handleItemClick(item: any) {
  router.push({
    path: "/oppo-detail",
    query: {
      type: item.type,
    },
  });
}
</script>

<style lang="scss">
.home {
    background-color: $bgGrayColor;
}
</style>