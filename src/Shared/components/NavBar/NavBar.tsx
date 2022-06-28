import { Logo } from './components/Logo';
import './NavBar.scss';
import { AiFillHome, AiOutlinePlus} from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import { BsShield, BsChatDots, BsBell, BsMegaphone } from 'react-icons/bs'
import { RiMenu5Line } from 'react-icons/ri';
import { NavSearchBar, WrappedNavSearchBar } from './components/Search/NavSearchBar';
import { NavBarProfile, NavProfileUser } from './components/NavBarProfile';
import { isMobile } from '../../utils/isMobile';
import { useRef, useState } from 'react';

type NavBarProps = {
    children?: React.ReactNode;
}

type NavBarContentProps = {
    user: NavProfileUser
}

export const NavBar: React.FC<NavBarProps> = ({ children }) => {
    const user: NavProfileUser = {
        username: "Brilliant_Program",
        image: 'https://styles.redditmedia.com/t5_3roz2q/styles/profileIcon_snoo16a6ac4e-84c8-45e1-8930-f1b06266fa7a-headshot.png?width=256&height=256&crop=256:256,smart&s=a1b897b90de646ccf5251c8006d8fc430ea1778d',
        karma: 2
    } 


    return (
    <div className='navbar-container'>
        <div className='navbar'>
            <Logo />
            {isMobile() && <MobileNavBarContent user={user}/>}
            { !isMobile() && <StandardNavBarContent user={user}/>}
        </div>
        <div className='wrapped-children'>
            {children}
        </div>
    </div>)
}

const StandardNavBarContent: React.FC<NavBarContentProps> = ({ user }) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const parentRef = useRef<HTMLDivElement | null>(null);

    const closeDropdownWhenClickedOutside = (e: MouseEvent) => {
        e.stopImmediatePropagation();
        console.log(e.target);
        const target = e.target;
        if (!target) {
            return;
        }

        if (target instanceof HTMLElement && !parentRef.current?.contains(target)) {
            console.log('Dropdown closes.')
            setDropdownOpen(false);
        }
    }

    return (
    <>
        <div className='home-dropdown-container'>
            <AiFillHome className='navbar__icon'/>
            <p className='navbar__home-text'>Home</p>
            <div className='navbar__spacer' />
            <BiChevronDown className='navbar__icon'/>
        </div>
        <NavSearchBar placeholder=''>
            <div  className='dropdown'>
                <div className='dropdown-content' data-active={dropdownOpen}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
                        return <div key={i} className='dropdown-item'>{i}</div>
                    })}
                </div>
            </div>
        </ NavSearchBar>   
        
        <div className='navbar__spacer'></div>
        <div className='navbar__actions'>
            <BsShield className='navbar__icon navbar__action'/>
            <BsChatDots className='navbar__icon navbar__action' />
            <BsBell className='navbar__icon navbar__action'/>
            <AiOutlinePlus className='navbar__icon navbar__action'/>
            <BsMegaphone className='navbar__icon navbar__action--circle highlighted'/>
        </div>
        <NavBarProfile user={user}/>
    </>
    )
}

const MobileNavBarContent: React.FC<NavBarContentProps> = ({ user }) => {
    return <div style={{display: 'flex', flex: '1'}}>
        <div style={{flex: '1'}}/>
        <RiMenu5Line className='navbar__icon navbar__action'/>
    </div>
}