import { useTheme } from '../context/themeContext';
// import {  FaUserCircle } from 'react-icons/fa';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';


export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={`navbar ${theme}`}>
            <div className="logo">
                <div className="image">
                    <img src="images/siitecch_1.png" alt="siitecch logo"/>
                </div>
                <Link to="/" style={{ textDecoration: 'none' }}><h2>SIITECCH</h2></Link>
            </div>
            <div className="social-handle">
                {/* <Link to="/profile">
                    <button className="button-hover">
                        <FaUserCircle style={{ color: '#F8FAFC', fontSize: '25px' }} />
                    </button>
                </Link> */}
                <button className="button-hover" onClick={toggleTheme}>
                    {theme === 'light' ? (
                        <MdLightMode style={{ fontSize: '25px', color: '#F8FAFC' }} />
                    ) : (
                        <MdDarkMode style={{ fontSize: '25px', color: '#F8FAFC' }} />
                    )}
                </button>
            </div>
        </header>
    );
}
