import './NavSearchBar.scss';
import { BsSearch } from 'react-icons/bs'
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { TrendingToday } from './components/TrendingTodayList';
import { useDispatch, useSelector } from 'react-redux';
import { fetch } from './state/TrendingActionCreators';
//import { SearchBarDropdown } from './components/SearchBarDropdown';
import { Provider } from 'react-redux'
import { search } from './search-state/SearchActionCreators';
import { useDebounce } from '../../../../utils/useDebounce';
import { SearchResultList } from './components/SearchResultList';
import { mapToPresented } from './search-state/services/makeSearchService';
import { AppStore, store } from './combinedReducers';
import { Dropdown, DropdownMenu } from './components/Dropdown';
import { SearchBarDropdown } from './components/SearchBarDropdown';

// MARK: Types
type NavBarSearchBarProps = {
    placeholder: string;
}
type DetailedNavBarProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & NavBarSearchBarProps;

type NavSearchBarType = React.FC<DetailedNavBarProps>

const DEBOUNCE_MILLISECONS = 500;

export const NavSearchBar: NavSearchBarType = ({ style, placeholder, onClick }) => {
    // MARK: Refs
    const searchFieldRef = useRef<HTMLInputElement | null>(null);
    const [open, setOpen] = useState(false); 
    console.log('dropdown state: ' + open);

    // MARK: Local state
    const [focused, setFocused] = useState(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_MILLISECONS);

    // MARK: Redux
    const dispatch = useDispatch();
    const trendsState = useSelector((state: AppStore) => state.trends);
    const searchState = useSelector((state: AppStore) => state.search);
    console.log('render')

    useEffect(() => {
        if (debouncedSearchTerm.length !== 0) {
            // @ts-ignore
            dispatch(search(searchTerm))
        }
    }, [debouncedSearchTerm]);


    //  MARK: Dropdown
    const closeDropdown = () => {
        setOpen(false);
        console.log('closeDropdown');
    }

    const openDropdown = () => {
       setOpen(true);
        if (debouncedSearchTerm.length === 0) {
            // @ts-ignore
            dispatch(fetch())
        }
        console.log('openDropdown');
    }

    // MARK: Input focus
    const _onFocused = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setFocused(true)
    }
    const onBlurred = (e: React.FocusEvent<HTMLInputElement, Element>) => setFocused(false)
    
    const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        searchFieldRef.current?.focus()
        onClick?.call(this, e);
        openDropdown()
    }

    
    const renderDropdownContent = () => {
        const isSearchTermEmpty = debouncedSearchTerm.length === 0;
        if (isSearchTermEmpty) {
            return <TrendingToday results={trendsState.trendingTopics} loading={trendsState.loading}/>
        } else {
            const presentableResults = searchState.results.map(r => mapToPresented(r));
            return <SearchResultList results={presentableResults} />
        }
    }

    return (
        <Dropdown open={open}>
            <div 
                data-input-dropdown-button
                style={style} 
                className={
                        classNames({
                            'navbar__search-bar-wrapper': true,
                            'focused-wrapper': focused,
                        })
                    } 
                onClick={(e) => onClickHandler(e)}>
                <BsSearch className='search-icon'/>
                <input  
                    type="text" 
                    name="search"
                    onChange={(e) => {
                    setSearchTerm(e.target.value)
                    }}
                    autoComplete='off'
                    placeholder={placeholder}
                    onFocus={_onFocused}
                    onBlur={onBlurred}
                    className={classNames({
                        'navbar__search-bar': true,
                        'focused': focused 
                    })}
                    ref={searchFieldRef} 
                />
            </div>
            <DropdownMenu>
                <SearchBarDropdown 
                    open={open}
                >
                    {renderDropdownContent()}
                </SearchBarDropdown>
            </DropdownMenu>
        </Dropdown>
    
    )
}


export const WrappedNavSearchBar: NavSearchBarType = ({children, ...rest}) => {
    return (
        <Provider store={store}>
            <NavSearchBar {...rest}>{children}</NavSearchBar>            
        </Provider>
    )
}