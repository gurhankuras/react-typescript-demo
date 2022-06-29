import React, { useEffect, useRef } from 'react'
import './SearchBarDropdown.scss'

type Props = {
    open: boolean,
    onClose: () => void
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> 

export const SearchBarDropdown = React.forwardRef<HTMLDivElement, Props>(({open, onClose,  children}, ref) => {
    const dropdownContentRef = useRef<HTMLDivElement | null>(null);

    // listener for click and window resize 
    useEffect(() => {
        const htmlElement = document.querySelector('html')
        htmlElement?.addEventListener('click', clickListenerCallback)
        window.addEventListener('resize', onClose)
        return () => {
            htmlElement?.removeEventListener('click', clickListenerCallback);
            window.removeEventListener('resize', onClose);
        }
    }, []);

    // scroll to top when opened
    useEffect(() => {
        console.log('use effect - SearchBarDropdown')

        if (open) {
            scrollToTop()
        }
    }, [open])

    const scrollToTop = () => dropdownContentRef.current?.scroll({top: 0})

    const unsafelyCastedRef = (): React.MutableRefObject<HTMLDivElement | null> => {
        return ref as React.MutableRefObject<HTMLDivElement | null>;
    } 

    const clickListenerCallback = (e: MouseEvent) => {
        e.stopImmediatePropagation();
        const target = e.target;
        if (!target) { return; }

        if (isReceivedOutsideOfDropdown(target)) {
            console.log('Dropdown closes.')
            onClose();
        }
    }

    const isReceivedOutsideOfDropdown = (target: EventTarget): boolean => {
        const typedRef = unsafelyCastedRef();
        return target instanceof HTMLElement && !typedRef.current?.contains(target);
    }

    return (
        <div className='dropdown'>
            <div className='dropdown__content' ref={dropdownContentRef} data-active={open}>
                {children}
            </div>
        </div>
    )
})
