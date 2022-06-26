import { Link } from "react-router-dom"
import './Logo.scss';
import { BsReddit } from 'react-icons/bs'

export const Logo = () => {
    return (
        <Link to='/' className='navbar__logo'>
            <div className="logo-wrapper">
                <div className="logo-container">
                    <BsReddit className='logo'/>
                </div>
                <p className="logo-text">Reddit</p>
            </div>
        </Link>
    )    
}