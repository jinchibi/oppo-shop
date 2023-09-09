<template>
    <div class="one-plus">
        <div class="wrapper content">
            <swiper :banners="data?.data.banners"></swiper>
            <tab-category :categorys="data?.data.categorys"></tab-category>
            <template v-for="category in data?.data.categorys" :key="category.id">
                <section-category 
                    :category="category"
                    v-if="category.productDetailss && category.productDetailss.length > 0"
                ></section-category>
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
import { getHomeInfo } from "@/service/home";
const { data } = await getHomeInfo("onePlus")
</script>
