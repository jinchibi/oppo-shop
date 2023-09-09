<template>
    <div class="section-category" >
        <section-title :title="category.title"></section-title>
        <grid-view :productDetailss="category.productDetailss" :category-url="category.url"></grid-view>
    </div>
</template>
<script setup lang="ts">
interface IProps {
    category: any
}
const props = withDefaults(defineProps<IProps>(), {
    category: () => ({})
})
</script>
<style lang="scss" scoped></style>