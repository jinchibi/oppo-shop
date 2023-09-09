// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from 'unplugin-element-plus/vite'
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    // 使用Babel进行语法转换
    transpile: ["element-plus/es"]
  },
  // 初始化css
  css: ["normalize.css", "@/assets/css/global.scss", "@/assets/cus-font/iconfont.css"],
  vite: {
    // 设置自动导入element-plus样式
    plugins: [ElementPlus({})],
    // 自动导入scss样式
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '@/assets/css/variables.scss' as *;"
        }
      }
    }
  },
  app: {
    head: {
      meta: [
        {
          name: "description",
          content:
            "OPPO专区，官方正品，最新最全的OPPO手机产品以及配件在线抢购！",
        },
        {
          name: "keywords",
          content: "OPPO商城，OPPO专区, OPPO手机，OPPO配件，OPPO, OPPO官网商城",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // { rel: "stylesheet", href: "https://liujun.css" }
      ],
      // add head
      // script: [{ src: "https://liujun.js" }],
      noscript: [{ children: "Javascript is required" }],
    },
  },
  // 配置nuxt3的扩展模块
  modules: ["@pinia/nuxt"],
})
