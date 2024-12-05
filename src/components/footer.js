import { useTheme } from '../context/themeContext';
import { Link } from 'react-router-dom';
import {
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGlobe,
  FaGoogle,
  FaInstagram,
  FaTiktok
} from 'react-icons/fa';
export default function Footer() {
  const { theme } = useTheme();
  const youTube = "https://youtube.com/@siitecch?si=ngX7lFMF0IWnU8X0";
  const faceBook = "https://web.facebook.com/profile.php?id=100076062997043";
  const Twitter = "https://x.com/siitecch";
  const linkedIn = "https://www.linkedin.com/in/christopher-osita-46b4b6202/";
  const google = "";
  const instaGram = "https://www.instagram.com/siitecch/?next=%2F";
  return (
    <>
      <footer className={`footer ${theme}`}>
        <div className="site-name">SIITECCH</div>
        <div className="about-page">
          <div className="about-write">
            Siitecch is a focused learning platform designed to
            guide aspiring developers in mastering full-stack development using JavaScript, offering a clear, step-by-step path from frontend to backend all in one place.
          </div>
        </div>
        <div className="footer-link">
          <div className="contact">Link Up With Us</div>
          <div className="socials">
            <button onClick={() => window.open(faceBook, "_blank", "noopener,noreferrer")}><FaFacebook style={{ color: '#4D9FEB', fontSize: '25px' }} /></button>
            <button onClick={() => window.open(youTube, "_blank", "noopener,noreferrer")}><FaYoutube style={{ color: '#ff0000', fontSize: '25px' }} /></button>
            <button onClick={() => window.open(Twitter, "_blank", "noopener,noreferrer")}><FaTwitter style={{ color: '#4D9FEB', fontSize: '25px' }} /></button>
            <button onClick={() => window.open(linkedIn, "_blank", "noopener,noreferrer")}><FaLinkedin style={{ color: '#4D9FEB', fontSize: '25px' }} /></button>
            <button onClick={() => window.open(google, "_blank", "noopener,noreferrer")}><FaGoogle style={{ color: '#792C2D', fontSize: '25px' }} /></button>
            <button onClick={() => window.open(instaGram, "_blank", "noopener,noreferrer")}><FaInstagram style={{ color: '#792C2D', fontSize: '25px' }} /></button>
            <button onClick={() => window.open(instaGram, "_blank", "noopener,noreferrer")}><FaTiktok style={{ color: '#000000', fontSize: '25px' }} /></button>
          </div>
          <div className="help">
            <div className="page-links"><Link to="/" className="linked">Home</Link></div>
            <div className="page-links"><Link to="/support" className="linked">Support</Link></div>
            <div className="page-links"><Link to="/about" className="linked">About Us</Link></div>
            <div className="page-links"><Link to="/faq" className="linked">FAQ</Link></div>
            <div className="page-links"><Link to="/developer" className="linked">About Developer</Link></div>

            <div className="copy"/>

            <div className="page-links"><Link to="/privacy" className="linked">Privacy Policy</Link></div>
            <div className="page-links"><Link to="/terms" className="linked">Terms of Service</Link></div>
            <div className="page-links"><Link to="/cookie" className="linked">Cookie Policy</Link></div>

            <div className="copy"/> 

            <div className="page-links"><Link to="/sitemap" className="linked">Sitemap</Link></div>
            {/* <div className="page-links"><Link to="/feedback" className="linked">Give Us a FeedBack</Link></div> */}

          </div>
          <div className="globe"><FaGlobe /><span>English</span> </div>
        </div>
        <div className="copy">&copy; 2024 siitecch, All reserved right.</div>
      </footer>
    </>
  );
};