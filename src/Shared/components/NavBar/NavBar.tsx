import { Logo } from './components/Logo';
import classes from './NavBar.module.css';
import { FaGithub } from 'react-icons/fa'
import { FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom';
type NavBarProps = {
    children?: React.ReactNode;
}

export const NavBar: React.FC<NavBarProps> = ({ children }) => {
    return (
    <div className={classes.container}>
        <div className={classes.navbar}>
            <Logo />
            <div className={classes.spacer}></div>
            <Link to={'/'} className={classes.link}>
                <FaUserPlus className={classes.icon}/>
            </Link>
        </div>
        {children}
    </div>)
}