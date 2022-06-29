import { ThunkAction } from "redux-thunk";
import { delay } from "../../../../../utils/delay";
import { TrendingAction, TrendingActionType } from "./TrendingActions";
import { TrendingStore } from "./TrendingStore";

export const fetch = (): ThunkAction<void, TrendingStore, unknown, TrendingAction>  => 
    async (dispatch, getState) => {
        // @ts-ignore
        const lastState = getState().trends as TrendingStore;
        if (!lastState.loading && !lastState.loaded) {
            const items = [1, 2, 3, 4];
            dispatch(trendingsLoading())
            await delay(1000, items)
            dispatch(trendingsLoaded(items))
        }
    };

export const trendingsLoaded = (items: number[]): TrendingAction => {
    return {
        type: TrendingActionType.loaded,
        payload: {
            items: items
        }
    }
}

export const trendingsLoading = (): TrendingAction => {
    return { type: TrendingActionType.loading }
}
