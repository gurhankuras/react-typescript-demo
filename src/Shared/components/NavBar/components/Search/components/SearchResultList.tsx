import React from 'react'
import { PresentedSearchResult } from '../presentation/PresentedSearchResult';
import './SearchResultList.scss';


type SearchResultListProps = {
  results: PresentedSearchResult[];
}

export const SearchResultList: React.FC<SearchResultListProps> = ({ results }) => {
  return (
    <ul className='search-result-list'>
      {results.map(r => {
        return <SearchResultTile key={r.id} result={r}/>
      })}
    </ul>
  )
}


type SearchResultTileProps = {
  result: PresentedSearchResult
}

const SearchResultTile: React.FC<SearchResultTileProps> = ({ result }) => {
  return (
    <li className='search-result'>
      <img className='search-result__image' src={result.image} alt={result.subredditName} />
      <div className='left'>
        <span className='search-result__name'>{result.subredditName}</span>
        <span className='search-result__member-count-text'>{result.memberCount} members</span>
      </div>
    </li>
  );
}
