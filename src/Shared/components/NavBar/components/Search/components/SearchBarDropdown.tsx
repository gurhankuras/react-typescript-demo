import React, { useEffect, useRef } from 'react'
import './SearchBarDropdown.scss'

type Props = {
    open: boolean,
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> 

export const SearchBarDropdown = React.forwardRef<HTMLDivElement, Props>(({open, children}, ref) => {
    const dropdownContentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        console.log('use effect - SearchBarDropdown')
        if (open) {
            scrollToTop()
        } else {
            
        }
    }, [open])

    const scrollToTop = () => {
        dropdownContentRef.current?.scroll({top: 0})
    }

  return (
    <div className='dropdown'>
        <div className='dropdown__content' ref={dropdownContentRef} data-active={open}>
            {children}
        </div>
    </div>
  )
})
