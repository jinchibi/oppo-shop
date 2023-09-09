import { IHomeState } from "~/store/home"
import hyRequest from "./index"
import type { ResultType } from "./index"
export type IHomeInfoType = "oppo" | "onePlus" | "intelligent"
export const getHomeInfo = (type: IHomeInfoType) => {
    return hyRequest.get<ResultType<IHomeState>>("/home/info", {
        type: type || "oppo"
    })
}
