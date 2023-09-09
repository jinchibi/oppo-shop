import hyRequest from "./index"
import type { ResultType } from "./index"

export type IDetailProductType = "oppo" | "air" | "watch" | "tablet"

export const getDetailInfo = (type: IDetailProductType) => {
    return hyRequest.get<ResultType<any>>("/oppoDetail", {
        type
    })
}