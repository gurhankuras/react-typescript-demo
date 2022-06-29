import { ThunkAction } from "redux-thunk";
import { delay } from "../../../../../utils/delay";
import { SearchResult } from "./model/SearchResult";
import { SearchAction, SearchActionType } from "./SearchActions";
import { SearchStore } from "./SearchStore";
import { searchService } from "./services/makeSearchService";

export const search = (query: string): ThunkAction<void, SearchStore, unknown, SearchAction>  => 
    async (dispatch, getState) => {
        dispatch({type: SearchActionType.search, payload: {query: query}})
        const results = await searchService.fetch(query);

        dispatch(searching())
        await delay(1000, results)
        dispatch(searchResultsFetched(results))
    };

export const searchResultsFetched = (results: SearchResult[]): SearchAction => {
    return {
        type: SearchActionType.fetched,
        payload: {
            results: results
        }
    }
}

export const searching = (): SearchAction => {
    return { type: SearchActionType.searching }
}
