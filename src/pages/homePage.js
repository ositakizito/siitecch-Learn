import { useTheme } from "../context/themeContext";
import { Link } from "react-router-dom";
import FloatButton from "../components/floatButton";
import Footer from "../components/footer";
import Header from "../components/header";
import {
    SiCss3,
    SiExpress,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiMysql,
    SiNodedotjs,
    SiReact
} from "react-icons/si";
import Quickref from "../components/quickref";
// import { FaArrowRight } from "react-icons/fa6";
import { FaGlobeAfrica } from "react-icons/fa";

export default function HomePage() {
    const { theme } = useTheme();

    return (
        <>
            <Header />

            <nav className={`navbar ${theme}`}>
                <div className="nav2">
                    <h1>Master Full-stack Development with JavaScript! </h1>
                    <p>From Frontend to Backend, Everything You Need in One Place, perfect for Those who Love JavaScript.</p>
                    <img src="images/programing.svg" alt="" />

                </div>
                {/* <div className="bottomBtn">
                    <button><Link to="register" className="link"> Sign Up!</Link> <FaArrowRight/></button>
                </div> */}
            </nav>
            <section className="materials">
                <section className="ends">
                    <h3>Frontend</h3>
                    <div className="line-width">
                        <div className="line-color"></div>
                    </div>
                </section>

                <section className="flex-container">
                    <button className="language overview"><Link to="/language/overview" className="button-link"><FaGlobeAfrica className="proIcon" />&nbsp;Overview</Link></button>
                    <button className="language html"><Link to="/language/html" className="button-link"><SiHtml5 className="proIcon" />&nbsp;HTML</Link></button>
                    <button className="language css"><Link to="/language/css" className="button-link"><SiCss3 className="proIcon" /> &nbsp;CSS</Link></button>
                    <button className="language git"><Link to="/language/git" className="button-link"><SiGit className="proIcon" /> &nbsp;Git & GitHub</Link></button>
                    <button className="language js"><Link to="/language/javascript" className="button-link"><SiJavascript className="proIcon" /> &nbsp; JavaScript</Link></button>
                    <button className="language rjs"><Link to="/language/react" className="button-link"><SiReact className="proIcon" />&nbsp;ReactJS</Link></button>
                </section>
            </section>
            <section className="materials">
                <section className="ends">
                    <h3>Backend</h3>
                    <div className="line-width">
                        <div className="line-color"></div>
                    </div>
                </section>
                <section className="flex-container">
                    <button className="language node"><Link to="#" className="button-link"><SiNodedotjs className="proIcon" />&nbsp;NodeJS</Link></button>
                    <button className="language ex"><Link to="#" className="button-link"><SiExpress className="proIcon" /> &nbsp;ExpressJS</Link></button>
                    <button className="language db"><Link to="#" className="button-link"><SiMysql style={{ fontSize: '30px' }} /> &nbsp;MySql DB</Link></button>
                    <button className="language btn"></button>
                </section>

                <br />
                <section className="ends">
                    <div className="line-width none">
                        <div className="line-color center"></div>
                    </div>
                    <div className=""></div>
                </section>

            </section>
            <FloatButton />
            <Quickref />
            <Footer />
            {/* <Bottom /> */}
        </>
    )
}