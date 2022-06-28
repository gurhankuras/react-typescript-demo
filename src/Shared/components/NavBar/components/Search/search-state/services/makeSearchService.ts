import { PresentedSearchResult } from "../../presentation/PresentedSearchResult";
import { SearchResult } from "../model/SearchResult";

export interface SearchService {
    fetch(term: string): Promise<SearchResult[]>

    
}

export const mapToPresented = (result: SearchResult): PresentedSearchResult => {
    return {
        id: result.id,
        subredditName: result.subredditName,
        image: result.image,
        memberCount: result.memberCount
    }
}

const stubs = [
    { 
        id: '1', 
        subredditName: 'nextfuckinglevel', 
        memberCount: 3, 
        image: 'https://styles.redditmedia.com/t5_m0bnr/styles/communityIcon_qanlm185crr71.png?width=256&s=2f3108b275aa91c9b7f43ddb2d8e7eb072d08b25'
    },
    {
        id: '2', 
        subredditName: 'ProgrammerHumor',
        memberCount: 3, 
        image: 'https://styles.redditmedia.com/t5_2tex6/styles/communityIcon_u89jf60zv7p41.png'
    },
    { id: '3', subredditName: 'ProgrammerHumor', memberCount: 3, image: 'https://styles.redditmedia.com/t5_2tex6/styles/communityIcon_u89jf60zv7p41.png'},
    { id: '4', subredditName: 'ProgrammerHumor', memberCount: 3, image: 'https://styles.redditmedia.com/t5_2tex6/styles/communityIcon_u89jf60zv7p41.png'}
];


function makeFakeSearchService(): SearchService {
    return {
        fetch: (term: string): Promise<SearchResult[]> => {
            return new Promise((resolve, _) => {
                resolve(stubs);
            });
        } 
    }
}

function makeSearchService(): SearchService {
    return makeFakeSearchService();
}

export const searchService = makeSearchService();