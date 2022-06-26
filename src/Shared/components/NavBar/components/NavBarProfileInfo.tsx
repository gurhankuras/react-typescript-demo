import './NavBarProfileInfo.scss';
import { SiAparat } from 'react-icons/si';

type NavBarProfileInfoProps = {
    username: string;
    karma: number;
}

export const NavBarProfileInfo: React.FC<NavBarProfileInfoProps> = ({username, karma}) => {
    return (
    <div className='info'>
        <p className='info__username'>{username}</p>
        <div className='info__karma'>
            <SiAparat className='info__karma-icon' />
            <div className='info__karma-text'>{karma} karma</div>
        </div>
    </div>)
}