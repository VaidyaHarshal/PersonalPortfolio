import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import InitialsImage from '../../img/Initials.png'

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu;
            }
        };
        const handleScroll = () => {
            closeMenu()
        }
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu;
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? 'active' : ''}`}>
            <div>
                <img src={InitialsImage} alt='MyPortfolio' className='navbar--logo' />
            </div>
            <a
                className={`nav__hamburger ${navActive ? 'active' : ''}`}
                onClick={toggleNav}
            >
                <span className='nav__hamburger__line'></span>
                <span className='nav__hamburger__line'></span>
                <span className='nav__hamburger__line'></span>
            </a>
            <div className={`navbar--items ${navActive ? 'active' : ''}`}>
                <ul>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass='navbar--active-content'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to='heroSection'
                            className='navbar--content'
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass='navbar--active-content'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to='MyPortfolio'
                            className='navbar--content'
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass='navbar--active-content'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to='AboutMe'
                            className='navbar--content'
                        >
                            About Me
                        </Link>
                    </li>
                </ul>
            </div>
            <Link
                onClick={closeMenu}
                activeClass='navbar--active-content'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to='Contact'
                className='btn btn-outline-primary'
            >
                Contact Me
            </Link>
        </nav>
    );
}

export default Navbar;
