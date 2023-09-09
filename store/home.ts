import { defineStore } from "pinia";
import type { IHomeInfoType } from "@/service/home"
import { getHomeInfo } from "@/service/home";

export interface IHomeState {
    navbars?: any[],
    banners?: any[],
    categorys?: any[]
}

export const useHomeStore = defineStore("home", {
    state: (): IHomeState => {
        return {
            navbars: [],
            banners: [],
            categorys: []
        }
    },
    actions: {
        async fetchHomeInfoData(type: IHomeInfoType) {
            const { data } = await getHomeInfo(type)
            this.navbars = data.value?.data.navbars || []
            this.banners = data.value?.data.banners || []
            this.categorys = data.value?.data.categorys || []
        }
    }
})

