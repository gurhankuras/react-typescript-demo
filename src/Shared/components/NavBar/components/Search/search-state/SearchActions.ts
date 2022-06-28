import { SearchResult } from "./model/SearchResult";

export enum SearchActionType {
    search = 'search',
    searching = 'searching',
    fetched = 'fetched'
}

interface SearchFetchedAction {
    type: SearchActionType.fetched
    payload: { 
        results: SearchResult[]
    }
}

interface SearchCommandAction {
    type: SearchActionType.search,
    payload: {
        query: string;
    }
}


interface SearchSearchingAction {
    type: SearchActionType.searching
}

export type SearchAction =  SearchCommandAction | SearchSearchingAction  | SearchFetchedAction; 