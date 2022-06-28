
import { BsSearch } from 'react-icons/bs'
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import './PostCreatorSearch.scss'

type PostCreatorSearchProps = {
    placeholder: string;
}
type DetailedPostCreatorSearchProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & PostCreatorSearchProps;

type PostCreatorSearchType = React.FC<DetailedPostCreatorSearchProps>

export const PostCreatorSearch: PostCreatorSearchType = ({ style, placeholder, onClick, children }) => {
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
                            'focused-wrapper': focused,
                        })
                    } onClick={(e) => focusOnSearch(e)}>
                        <input  type="text" 
                                name="search"
                                autoComplete='off'
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
