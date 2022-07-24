// https://styles.redditmedia.com/t5_3roz2q/styles/profileIcon_snoo16a6ac4e-84c8-45e1-8930-f1b06266fa7a-headshot.png?width=256&height=256&crop=256:256,smart&s=a1b897b90de646ccf5251c8006d8fc430ea1778d

import './NavBarProfile.scss';
import { BiChevronDown } from 'react-icons/bi'
import { NavBarProfileInfo } from './NavBarProfileInfo';
import { Avatar } from './Avatar';
import { Dropdown, DropdownMenu } from './Search/components/Dropdown';
import { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs'



export interface NavProfileUser {
    image: string;
    username: string;
    karma: number;
}

export type NavBarProfileProps = {
    user: NavProfileUser
}

export const NavBarProfile: React.FC<NavBarProfileProps> = ({ user }) => {
    const [open, setOpen] = useState(false);
    return (
        <Dropdown open={open}>
            <div className='profile' data-dropdown-button>
                <Avatar image={user.image}/>
                <NavBarProfileInfo username={user.username} karma={user.karma}  />
                <BiChevronDown className='chevron'/>
            </div>
            <DropdownMenu>
                <NavBarProfileDropdownMenu />
            </DropdownMenu>
        </Dropdown>
        
    )
}


const NavBarProfileDropdownMenu: React.FC<{}> = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className='profile-dropdown-menu'>
            <div className='profile-subsection my-stuff'>
                <div className='profile-subsection-header'>
                    <BsPersonCircle className='profile-subsection-icon'/>
                    <div className='profile-subsection-title'>My Stuff</div>
                </div>
                <ul>
                    <li className="profile-dropdown-menu__option">
                        <div className='profile-dropdown-menu__option__title'>
                            Title
                        </div>
                    </li>
                    <li className="profile-dropdown-menu__option">
                        <div className='profile-dropdown-menu__option__title'>
                            Title
                        </div>
                    </li>
                    <li className="profile-dropdown-menu__option">
                        <div className='profile-dropdown-menu__option__title'>
                            Title
                        </div>
                        <div className='switch' data-checked={darkMode} onClick={() => {
                            setDarkMode(!darkMode);
                        }}></div>
                    </li>
                    <li className="profile-dropdown-menu__option">
                        <div className='profile-dropdown-menu__option__title'>
                            Title
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}