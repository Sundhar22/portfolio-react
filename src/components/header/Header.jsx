import React , {useState}from 'react'
import './header.css'

const Header = () => {
    
    const[showMenu, setShowMenu] = useState(false)

  return (
     <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Sundhar</a>
            <div className={showMenu?"nav__menu show-menu":"nav__menu"}>
                <ul className="nav__menu-list grid">
                    <li className="nav__menu-item">
                        <a href="#home" className="nav__menu-link active-link">
                            <i className="uil uil-estate nav__icon"></i>
                            Home
                        </a>
                    </li>
                    <li className="nav__menu-item">
                        <a href="#about" className="nav__menu-link">
                            <i className="uil uil-user nav__icon"></i>
                            About
                        </a>
                    </li>
                    <li className="nav__menu-item">
                        <a href="#skills" className="nav__menu-link">
                            <i className="uil uil-file-alt nav__icon"></i>
                            Skills
                        </a>
                    </li>
                    <li className="nav__menu-item">
                        <a href="#services" className="nav__menu-link">
                            <i className="uil uil-briefcase-alt nav__icon"></i>
                            Services
                        </a>
                    </li>
                    <li className="nav__menu-item">
                        <a href="#projects" className="nav__menu-link">
                            <i className="uil uil-scenery nav__icon"></i>
                        Projects
                        </a>
                    </li>
                    <li className="nav__menu-item">
                        <a href="#contact" className="nav__menu-link">
                            <i className="uil uil-message nav__icon"></i>
                            Contact
                        </a>
                    </li>

                    
                </ul>
                <i onClick={                
                ()=>setShowMenu(!showMenu)
            } className="uil uil-times nav__close"></i>

            </div>
            <div className="nav__toggle">
            <i onClick={                
                ()=>setShowMenu(!showMenu)
            } className="uil uil-apps nav__open"></i>  
            </div>
        </nav>
     </header>
  )
}

export default Header