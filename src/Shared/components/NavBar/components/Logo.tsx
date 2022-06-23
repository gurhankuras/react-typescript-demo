import { Link } from "react-router-dom"
import classes from './Logo.module.css';

export const Logo = () => {
    return (
        <Link to='/' className={classes.logoLink}>
            <h2>Logo</h2>
        </Link>
    )    
}