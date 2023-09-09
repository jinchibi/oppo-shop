<template>
    <div class="layout">
        <!-- header -->
        <app-header></app-header>
        <navbar :navbars="navbars"></navbar>
        <!-- 页面内容的站位 -->
        <slot></slot>
        <!-- footer -->
        <app-footer></app-footer>
    </div>
</template>
<script setup lang="ts">
import { useHomeStore } from "@/store/home"
import { storeToRefs } from "pinia"
const homeStore = useHomeStore()
homeStore.fetchHomeInfoData("oppo")
const { navbars } = storeToRefs(homeStore)
</script>
<style lang="scss" scoped>

</style>