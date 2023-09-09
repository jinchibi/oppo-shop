<template>
    <div class="navbar">
        <div class="wrapper content">
            <nuxt-link to="/" class="content-left">
                <img src="@/assets/images/logo.png" class="logo" alt="">
            </nuxt-link>
            <ul class="content-center">
                <template v-for="(item, index) in navbars" :key="index">
                    <li :class="{ active: currentIndex === index }">
                        <nuxt-link :to="getPagePath(item)" class="link" @click="handleItemClick(index)">{{ item.title }}</nuxt-link>
                    </li>
                </template>
            </ul>
            <div class="content-right">
                <Search></Search>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
// 获取navbar数据
export interface IProps {
    navbars: any[]
}
const props = withDefaults(defineProps<IProps>(), {
    navbars: () => []
})
// 点击切换路由
const currentIndex = ref<number>(0)
function handleItemClick(index: number) {
    currentIndex.value = index
}
const getPagePath = computed(() => {
    return (item: any) => {
        let path = "/"
        if (item.type !== "oppo") {
            path += item.type
        }
        return path
    }
})
</script>
<style lang="scss" scoped>
.navbar {
    height: $navBarHeight;
    z-index: 99;
    border-bottom-color: rgba(0, 0, 0, 0.06);
    border-bottom-style: solid;
    border-bottom-width: 1px;

    /* 吸顶 */
    @include elementSticky(36px);
    background-color: white;

    .content {
        height: 100%;
        /* @include border(); */
        @include normalFlex();
        justify-content: flex-start;
        align-items: center;

        .content-left {
            display: inline-block;
            width: $logoWidth;
            height: $logoHeight;

            .logo {
                height: 100%;
            }

            .title {
                text-indent: -1000px;
                height: 0;
                margin: 0;
            }
        }

        .content-center {
            @include normalFlex();
            width: 530px;
            margin-left: 60px;

            .link {
                font-size: 14px;
                color: #000;
                opacity: 0.55;
            }

            .link:hover {
                opacity: 1;
            }

            .active .link {
                opacity: 1;
            }
        }

        .content-right {
            margin-left: 50px;
        }
    }
}
</style>