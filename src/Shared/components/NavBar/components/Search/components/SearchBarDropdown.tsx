import React, { useEffect, useRef } from 'react'
import './SearchBarDropdown.scss'

export type Props = {
    open: boolean,
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> 


export const SearchBarDropdown: React.FC<Props> = (({open,  children}) => {
    const dropdownContentRef = useRef<HTMLDivElement | null>(null);

    // listener for click and window resize 

    // scroll to top when opened
    useEffect(() => {
        console.log('use effect - SearchBarDropdown')

        if (open) {
            scrollToTop()
            console.log('scroll to top')
        }
    }, [open])

    const scrollToTop = () => dropdownContentRef.current?.scroll({top: 0})

    return (
        <div className='search-dropdown__content' ref={dropdownContentRef} data-active={open}>
            {children}
        </div>
    )
})
