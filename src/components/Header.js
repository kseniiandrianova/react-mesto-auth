import logo from '../images/logo.svg';
import { Link, Route } from 'react-router-dom';
import menu from '../images/menu.svg';
import close from '../images/close-icon.svg';


export default function Header({ onSignOut, email, isOpen, onMenu, isMenuIcon, isMenuCloseIcon, onClose }) {
    return (
            <header className="header">
                <img className="logo" src={logo} alt="Mesto" />
                <div className="header__container">
                <Route exact path="/main">
                <dev className={`header__popup ${isOpen}`}>
                <p className="header__email">{email} </p>
                <Link to="/signin" className="header__link" onClick={onSignOut}>Выйти</Link>
                </dev>
                <dev className="header__menu-element">
                  <div className='header__navbar'>
                  <p className='header__popup-email'>{email}</p>
                  <button type='button' onClick={onMenu} className={`header__button-menu ${isMenuIcon}`}><img src={menu} alt='Меню' /></button>
                  <button type='button' onClick={onClose} className={`header__button-close ${isMenuCloseIcon}`}><img src={close} alt='Крестик' /></button>
                  <button onClick={onSignOut} className="header__button">Выход</button>
                  </div>
                </dev>
                    
                </Route>
                <Route exact path="/signin">
                    <Link to="/signup" className="header__link">Регистрация</Link>
                </Route>
                <Route exact path="/signup">
                    <Link to="/signin" className="header__link">Войти</Link>
                </Route>
                </div>
                
            </header>
        
    )
}