// https://styles.redditmedia.com/t5_3roz2q/styles/profileIcon_snoo16a6ac4e-84c8-45e1-8930-f1b06266fa7a-headshot.png?width=256&height=256&crop=256:256,smart&s=a1b897b90de646ccf5251c8006d8fc430ea1778d

import './NavBarProfile.scss';
import { BiChevronDown } from 'react-icons/bi'
import { NavBarProfileInfo } from './NavBarProfileInfo';
import { Avatar } from './Avatar';



export interface NavProfileUser {
    image: string;
    username: string;
    karma: number;
}

export type NavBarProfileProps = {
    user: NavProfileUser
}

export const NavBarProfile: React.FC<NavBarProfileProps> = ({ user }) => {
    
    return (<div className='profile'>
        <Avatar image={user.image}/>
        <NavBarProfileInfo username={user.username} karma={user.karma}  />
        <BiChevronDown className='chevron'/>
    </div>)
}