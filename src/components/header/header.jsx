import Logo from './../../image/icons/logo.svg';
import './header.css';


function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={Logo} alt="" />
                        <span>Fashion</span>
                    </div>
                    <div className="header__nav">
                        <ul>
                            <li>
                                <a href="#!">Catalogue</a>
                            </li>
                            <li>
                                <a href="#!">Fashion</a>
                            </li>
                            <li>
                                <a href="#!">Favourite</a>
                            </li>
                            <li>
                                <a href="#!">Lifestyle</a>
                            </li>
                            <li>
                                <a href="#!" className='header__nav-btn'>Sign up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;