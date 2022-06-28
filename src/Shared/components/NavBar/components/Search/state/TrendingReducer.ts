import { TrendingAction, TrendingActionType } from "./TrendingActions";
import { TrendingStore } from "./TrendingStore";

export const reducer = (store: TrendingStore = {loaded: false, loading: false, trendingTopics: []}, action: TrendingAction): TrendingStore => {
    switch (action.type) {
        case TrendingActionType.loaded:
            return { loading: false, loaded: true, trendingTopics: action.payload.items }
        case TrendingActionType.loading:
            return { loading: true, loaded: false, trendingTopics: store.trendingTopics }
        case TrendingActionType.fetch:
            return store;
        default:
            return store;
    }
}