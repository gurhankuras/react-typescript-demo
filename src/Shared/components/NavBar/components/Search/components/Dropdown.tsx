import classNames from 'classnames';
import React, { useEffect, useRef } from 'react'
import './Dropdown.scss';




type DropdownProps = {
  open: boolean;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> 

export const Dropdown: React.FC<DropdownProps> = ({ children, open }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const className = classNames({
    'dropdown': true,
    'active': open
  });

  useEffect(() => {
    const dropdown = ref.current;
    console.log(dropdown);
    if (open) {
      dropdown?.scroll({top: 0})
      dropdown?.classList.add('active');
      console.log('adding');
    } else {
      dropdown?.classList.remove('active');
      console.log('removing');
    }
  }, [open]);

    return (
    <div ref={ref} className={className} data-dropdown>
        { children }
    </div>
  )
}


type DropdownMenuProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> 

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
    return (
        <div className='dropdown-menu'>
            {children}
        </div>
    )
}
