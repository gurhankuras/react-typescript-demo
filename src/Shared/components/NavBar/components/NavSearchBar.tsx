import './NavSearchBar.scss';
import { BsSearch } from 'react-icons/bs'
import React, { useRef, useState } from 'react';
import classNames from 'classnames';

type NavBarSearchBarProps = {
    placeholder: string;
}
type DetailedNavBarProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & NavBarSearchBarProps;

type NavSearchBarType = React.FC<DetailedNavBarProps>

export const NavSearchBar: NavSearchBarType = ({ style, placeholder, onClick }) => {
    const searchFieldRef = useRef<HTMLInputElement | null>(null);

    const [focused, setFocused] = useState(false);
    
    const focusOnSearch = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        searchFieldRef.current?.focus()
        onClick?.call(this, e);
    }

    const onFocused = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setFocused(true);
    }
    const onBlurred = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setFocused(false);
    }

    return (
        <div style={style} className={
            classNames({
                'navbar__search-bar-wrapper': true,
                'focused-wrapper': focused 
            })
        } onClick={(e) => focusOnSearch(e)}>
            <BsSearch />
            <input  type="text" 
                    name="search"
                    placeholder={placeholder}
                    onFocus={onFocused}
                    onBlur={onBlurred}
                    className={classNames({
                        'navbar__search-bar': true,
                        'focused': focused 
                    })}
                    ref={searchFieldRef} />
        </div>
    )
}