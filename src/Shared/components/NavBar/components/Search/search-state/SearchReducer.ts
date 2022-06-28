import { SearchAction, SearchActionType } from "./SearchActions";
import { SearchStore } from "./SearchStore";

const initialState: SearchStore = {results: [], searching: false }
export const reducer = (store: SearchStore = initialState, action: SearchAction): SearchStore => {
    switch (action.type) {
        case SearchActionType.search:
            return store;
        case SearchActionType.searching:
            return { searching: true, results: store.results }
        case SearchActionType.fetched:
            return { searching: false, results: action.payload.results };
        default:
            return store;
    }
}