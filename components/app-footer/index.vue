<template>
    <div class="app-footer">
        appfooter
    </div>
</template>

<script setup lang="ts">
export interface IProps {
    title: string;
}
const props = withDefaults(defineProps<IProps>(), {
    title: "",
})
</script>
<style lang="scss">
    
</style>