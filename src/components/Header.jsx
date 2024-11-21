import { Link } from 'react-router-dom'
import icon from '../img/icon.png'

export const Header = () => {

    return(
        <div className="headerContainer">
            <img src={icon} alt="" />
            <div className='headerTextGroup'>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/whatdowedo'}>What Do We Do</Link>
                <Link to={'/portfolio'}>Portfolio</Link>
                <Link to={'/contact'}>Contact Us</Link>
            </div>
        </div>
    )
}