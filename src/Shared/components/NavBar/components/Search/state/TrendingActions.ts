export enum TrendingActionType {
    fetch = 'fetch',
    loaded = 'loaded',
    loading = 'loading'
}

interface TrendingLoadedAction {
    type: TrendingActionType.loaded
    payload: { 
        items: number[]
    }
}

interface TrendingLoadingAction {
    type: TrendingActionType.loading
}
interface TrendingFetchAction {
    type: TrendingActionType.fetch
}

export type TrendingAction =  TrendingLoadedAction  | TrendingLoadingAction | TrendingFetchAction