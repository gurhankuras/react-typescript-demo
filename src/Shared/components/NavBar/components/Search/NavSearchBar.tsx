import './NavSearchBar.scss';
import { BsSearch } from 'react-icons/bs'
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { TrendingToday } from './components/TrendingTodayList';
import { useDispatch, useSelector } from 'react-redux';
import { store as trendsStore, TrendingStore } from './state/TrendingStore';
import { fetch } from './state/TrendingActionCreators';
import { SearchBarDropdown } from './components/SearchBarDropdown';
import { Provider } from 'react-redux'
import { SearchStore, store as searchStore } from './search-state/SearchStore';
import { search } from './search-state/SearchActionCreators';
import { useDebounce } from '../../../../utils/useDebounce';
import { SearchResultList } from './components/SearchResultList';
import { mapToPresented } from './search-state/services/makeSearchService';
import { AppStore, store } from './combinedReducers';

type NavBarSearchBarProps = {
    placeholder: string;
}
type DetailedNavBarProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & NavBarSearchBarProps;

type NavSearchBarType = React.FC<DetailedNavBarProps>

export const NavSearchBar: NavSearchBarType = ({ style, placeholder, onClick, children }) => {
    const searchFieldRef = useRef<HTMLInputElement | null>(null);
    const parentRef = useRef<HTMLDivElement | null>(null);

    const [focused, setFocused] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    
    const dispatch = useDispatch();

    //const state = useSelector((state: AppStore) => state.trends);
    const state = useSelector((state: AppStore) => state.trends);
    const searchState = useSelector((state: AppStore) => state.search);
    console.log(state);
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);

    console.log('render')

    useEffect(() => {
        const htmlElement = document.querySelector('html')
        htmlElement?.addEventListener('click', closeDropdownWhenClickedOutside)
        window.addEventListener('resize', closeDropdown)
        return () => {
            htmlElement?.removeEventListener('click', closeDropdownWhenClickedOutside);
            window.removeEventListener('resize', closeDropdown);
        }
    }, []);

    useEffect(() => {
        if (debouncedSearchTerm.length !== 0) {
            // @ts-ignore
            dispatch(search(searchTerm))
        }
    }, [debouncedSearchTerm]);

    const closeDropdownWhenClickedOutside = (e: MouseEvent) => {
        e.stopImmediatePropagation();
        const target = e.target;
        if (!target) { return; }

        if (target instanceof HTMLElement && !parentRef.current?.contains(target)) {
            console.log('Dropdown closes.')
            closeDropdown()
        }
    }

    const closeDropdown = () => {
        setDropdownOpen(false);
    }

    const openDropdown = () => {
        if (debouncedSearchTerm.length === 0) {
            // @ts-ignore
            dispatch(fetch())
        }
        setDropdownOpen(true);
    }

    const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        searchFieldRef.current?.focus()
        onClick?.call(this, e);
        openDropdown()
    }

    const onFocused = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setFocused(true);
    }
    const onBlurred = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setFocused(false);
    }

    return (
        <div ref={parentRef}>
            <div 
                style={style} 
                className={
                        classNames({
                            'navbar__search-bar-wrapper': true,
                            'focused-wrapper': focused,
                        })
                    } 
                onClick={(e) => onClickHandler(e)}>
                <BsSearch />
                <input  
                    type="text" 
                    name="search"
                    onChange={(e) => {
                       setSearchTerm(e.target.value)
                    }}
                    autoComplete='off'
                    placeholder={placeholder}
                    onFocus={onFocused}
                    onBlur={onBlurred}
                    className={classNames({
                        'navbar__search-bar': true,
                        'focused': focused 
                    })}
                    ref={searchFieldRef} 
                />  
            </div>
            <SearchBarDropdown 
                open={dropdownOpen} 
                ref={parentRef}
            >
                {debouncedSearchTerm.length === 0 &&
                 <TrendingToday results={state.trendingTopics} loading={state.loading}/>}
                 {debouncedSearchTerm.length !== 0 && <SearchResultList results={searchState.results.map(r => mapToPresented(r))}/>}
            </SearchBarDropdown>
        </div>
        
    )
}


export const WrappedNavSearchBar: NavSearchBarType = ({children, ...rest}) => {
    return (
        <Provider store={store}>
            <NavSearchBar {...rest}>{children}</NavSearchBar>            
        </Provider>
    )
}