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
import { FaGlobeAfrica, FaPhone, FaPlayCircle } from "react-icons/fa";
import { FaChartArea, FaCheck, FaChrome, FaStar } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDesktopWindows, MdOutlineHorizontalRule, MdOutlineRemoveRedEye, MdOutlineSecurity, MdOutlineSmartphone } from "react-icons/md";
import { BsPatchCheck } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import Card from "../components/card";

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
                <div className="bottomBtn">
                    <button><Link to="register" className="link">Get Started</Link> </button>
                    <button className="playbtn"><FaPlayCircle style={{ fontSize: '25px' }} /> <Link to="" className="link"> Play Video</Link> </button>
                </div>
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

            <section className="materials">
                <section className="ends">
                    <h3>More About Us</h3>
                    <div className="line-width">
                        <div className="line-color"></div>
                    </div>
                </section>
                <section className="flex-container about">
                    <div className="aboutUs head">
                        <h1>SIITECCH</h1>
                        <p> Siitecch is a focused learning platform designed to
                            guide aspiring developers in mastering full-stack development using JavaScript, offering a clear, step-by-step path from frontend to backend all in one place.</p>
                    </div>
                    <div className="about_feature">
                        <div className="aboutCircle">
                            <div className="check"><FaCheck style={{ fontSize: '20px' }} /></div>
                            <div className="checkWrite">Step-by-Step Learning Path.</div>
                        </div>
                        <div className="aboutCircle">
                            <div className="check"><FaCheck style={{ fontSize: '20px' }} /></div>
                            <div className="checkWrite">Frontend to Backend in One Place.</div>
                        </div>
                        <div className="aboutCircle">
                            <div className="check"><FaCheck style={{ fontSize: '20px' }} /></div>
                            <div className="checkWrite">Clear, Beginner-Friendly Content.</div>
                        </div>
                        <div className="aboutCircle">
                            <div className="check"><FaCheck style={{ fontSize: '20px' }} /></div>
                            <div className="checkWrite">Practical Projects and Real Examples.</div>
                        </div>
                        <div className="aboutCircle">
                            <div className="check"><FaCheck style={{ fontSize: '20px' }} /></div>
                            <div className="checkWrite">No Scattered Resources.</div>
                        </div>
                        <div className="aboutCircle">
                            <div className="check"><FaCheck style={{ fontSize: '20px' }} /></div>
                            <div className="checkWrite">Stay Motivated and On Track.</div>
                        </div>
                    </div>
                    <div>
                        <Link to="/about" className="link">see more...</Link>
                    </div>
                    <section className="code_image">
                        <img src="images/code_pic.webp" alt="code_picture" />
                        <img src="images/code_pic1.webp" alt="code_picture2" />
                    </section>
                </section>


                <br />
                <section className="ends">
                    <div className="line-width none">
                        <div className="line-color center"></div>
                    </div>
                    <div className=""></div>
                </section>

            </section>

            <section className="materials">
                <section className="ends">
                    <h3>Features</h3>
                    <div className="line-width">
                        <div className="line-color"></div>
                    </div>
                </section>

                <section className="flex-container about">
                    <div className="aboutUs feature">
                        <p>Siitecch empowers aspiring developers with a structured, all-in-one platform to learn full-stack JavaScript development, collaborate, grow their skills, and achieve success.</p>
                    </div>

                    <div className="about_feature">
                        <div className="feature_box">
                            <div className="check"><BsPatchCheck style={{ fontSize: '30px' }} /></div>
                            <div className="featureHead">GROW</div>
                            <div className="featureText">Advance your skills and confidence as you build real-world projects step-by-step.</div>
                        </div>
                        <div className="feature_box one">
                            <div className="check"><FaCheck style={{ fontSize: '30px' }} /></div>
                            <div className="featureHead">COLLABORATE</div>
                            <div className="featureText">Learn together with like-minded developers, share ideas, and grow as a community.</div>
                        </div>
                        <div className="feature_box two">
                            <div className="check"><MdOutlineSecurity style={{ fontSize: '30px' }} /></div>
                            <div className="featureHead">SECURITY</div>
                            <div className="featureText">Enjoy a secure and reliable platform that keeps your progress safe and accessible.</div>
                        </div>

                    </div>
                </section>
                <section className="feature_below">
                    <div className="feature_box below">
                        <div className="featureHead">Use On Any Device</div>
                        <div className="featureText">Access Siitecch seamlessly on your mobile, tablet, or desktop, anytime and anywhere.</div>
                        <div className="check"><MdOutlineDesktopWindows style={{ fontSize: '30px' }} /></div>
                    </div>
                    <div className="feature_box below">
                        <div className="featureHead">Retina Ready</div>
                        <div className="featureText">Enjoy sharp, high-quality visuals that look stunning on all modern, high-resolution screens.</div>
                        <div className="check"><MdOutlineRemoveRedEye style={{ fontSize: '30px' }} /></div>
                    </div>
                    <div className="feature_box below">
                        <div className="featureHead">Fully Responsive</div>
                        <div className="featureText">Siitecch is designed to adapt perfectly to any screen size, ensuring a smooth experience across devices.</div>
                        <div className="check"><MdOutlineSmartphone style={{ fontSize: '30px' }} /></div>
                    </div>
                    <div className="feature_box below">
                        <div className="featureHead">Browser Compatibility</div>
                        <div className="featureText">Siitecch works flawlessly across all major browsers, delivering consistent performance everywhere.</div>
                        <div className="check"><FaChrome style={{ fontSize: '30px' }} /></div>
                    </div>
                </section>

                <br />
                <section className="ends">
                    <div className="line-width none">
                        <div className="line-color center"></div>
                    </div>
                    <div className=""></div>
                </section>

            </section>
            <section className="materials">
                <section className="ends">
                    <h3>Acknowledgments</h3>
                    <div className="line-width">
                        <div className="line-color"></div>
                    </div>
                </section>

                <section className={`flex-container about ${theme}`}>
                    <div className="aboutUs feature">
                        
                        <p>Acknowledging My Supporters and Mentors</p>
                    </div>

                    <div className="feature_box three">
                        <div className="test_image">
                            <img src="https://media.licdn.com/dms/image/v2/D4D03AQGG2QFJr5--bg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1703783922744?e=1739404800&v=beta&t=_HXQc_EjRWGIX5Lrw_X_dY3wdpl9VtDwtJrxXUcVaZA" alt="Chidiebere Vincent Christopher" />
                            <div className="image_details">
                                <h2>Christopher Vincent</h2>
                                <p>Digital Payment || Data Science || Finance || Consulting.</p>
                                <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            </div>
                        </div>
                        <div className="test_details">
                            <p>I am proud of what you are doing.</p>
                        </div>
                    </div>
                    <div className="feature_box three">
                        <div className="test_image">
                            <img src="https://media.licdn.com/dms/image/v2/D4D03AQEKqAJXtxT05Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1733003547293?e=1739404800&v=beta&t=uyCnDOIAJscpmR-ISWJo9pnl5ODGSCgi6Z1JoCZOsVE" alt="Odii Daniel" />
                            <div className="image_details">
                                <h2>Odii Daniel</h2>
                                <p>Backend developer • Building SAAS for individuals, startups and organizations</p>
                                <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            </div>
                        </div>
                        <div className="test_details">
                            <p>Bravo christopher osita, you really did put in a lot to see this particular moment come true;
                                We are stoked and ready to know what’s next!
                                Learn web dev?
                                Learn from Siitecch!</p>
                        </div>
                    </div>
                    <div className="feature_box three">
                        <div className="test_image">
                            <img src="https://media.licdn.com/dms/image/v2/D4E03AQFOXRnDY_lf3g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1720720951633?e=1739404800&v=beta&t=_SWpUOrk9ae1a580CnJxLSrej73GLRDNcknp-MtA5cw" alt="Solomon Milan" />
                            <div className="image_details">
                                <h2>Solomon Mlan</h2>
                                <p>CEO Cypress | Digital Marketer | Web Developer | SEO Specialist | Speaker.</p>
                                <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            </div>
                        </div>
                        <div className="test_details">
                            <p>You’re doing great! Keep soaring high.</p>
                        </div>
                    </div>

                </section>
                <section className="total-students">
                    <div className="single">
                        <div className="figure">10,000</div>
                        <div className="line"><MdOutlineHorizontalRule /></div>
                        <div className="">Students</div>
                    </div>
                    <div className="single">
                        <div className="figure">200</div>
                        <div className="line"><MdOutlineHorizontalRule /></div>
                        <div className="">Videos</div>
                    </div>
                    <div className="single">
                        <div className="figure">150</div>
                        <div className="line"><MdOutlineHorizontalRule /></div>
                        <div className="">Projects</div>
                    </div>
                </section>

                <br />
                <section className="ends">
                    <div className="line-width none">
                        <div className="line-color center"></div>
                    </div>
                    <div className=""></div>
                </section>

            </section>
            <section className="materials">
                <section className="ends">
                    <h3>services</h3>
                    <div className="line-width">
                        <div className="line-color"></div>
                    </div>
                </section>

                <section className={`flex-container about ${theme}`}>
                    <div className="aboutUs feature">

                        <p> Bringing Your Ideas to Life with Design, Development, and Programming</p>
                    </div>

                    <div className="feature_box three">
                        <div className="test_image">
                            <div className="service-logo">
                                <FaChartArea />
                            </div>
                            <div className="image_details">
                                <h2>Web Design</h2>
                            </div>
                        </div>
                        <div className="test_details">
                            <p>Craft visually appealing and user-friendly designs that bring ideas to life with creativity and precision.</p>
                        </div>
                    </div>
                    <div className="feature_box three">
                        <div className="test_image">
                            <div className="service-logo">
                                <FaChartArea />
                            </div>
                            <div className="image_details">
                                <h2>Web Development</h2>
                            </div>
                        </div>
                        <div className="test_details">
                            <p>Build fast, scalable, and dynamic websites that deliver seamless user experiences and robust functionality.</p>
                        </div>
                    </div>
                    <div className="feature_box three">
                        <div className="test_image">
                            <div className="service-logo">
                                <FaChartArea />
                            </div>
                            <div className="image_details">
                                <h2>Programming</h2>
                            </div>
                        </div>
                        <div className="test_details">
                            <p>Master the art of coding with clean, efficient, and maintainable solutions tailored to modern development needs.</p>
                        </div>
                    </div>


                </section>

                <br />
                <section className="ends">
                    <div className="line-width none">
                        <div className="line-color center"></div>
                    </div>
                    <div className=""></div>
                </section>

            </section>
            <section className="materials">
                <section className="ends">
                    <h3>Have a question? Check out the FAQ</h3>
                    <div className="line-width">
                        <div className="line-color"></div>
                    </div>
                </section>

                <section className={`flex-container about ${theme}`}>
                  

                    <Card title="What is Siitecch?">
                        <p>Siitecch is an online learning platform designed to help beginners master full-stack development using JavaScript. It provides a structured pathway to learn HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MySQL all in one place. The platform aims to simplify the learning experience and make coding accessible to everyone.</p>
                    </Card>
                    <Card title="Is Siitecch free?">
                        <p>Yes, Siitecch provides free access to most of its content. We may offer exclusive, advanced features or courses in the future for a small fee, but our core mission is to make learning affordable and accessible to everyone.</p>
                    </Card>
                    <Card title="What is the best way to use Siitecch?">
                        <p>To get the most out of Siitecch:</p>
                        <ul>
                            <li>Start with the beginner-friendly courses like HTML, CSS, and JavaScript.</li>
                            <li>Follow the recommended learning path for full-stack development.</li>
                            <li>Practice with the real-world coding examples and projects provided</li>
                            <li>Watch video tutorials for additional clarity.</li>
                        </ul>

                    </Card>
                    <Card title="How do I contact Siitecch for support?">
                        <p>You can reach out to us through:</p>
                        <ul>
                            <li>Email: ositakizito4@gmail.com</li>
                            <li>The Contact Us page on our website.
                                We’re here to help with any questions or issues you may have.</li>
                        </ul>

                    </Card>
                    <Link to="/faq" className="link">See more...</Link>
                </section>

                <br />
                <section className="ends">
                    <div className="line-width none">
                        <div className="line-color center"></div>
                    </div>
                    <div className=""></div>
                </section>

            </section>

            <section className="materials">
                <section className="ends">
                    <h3>Get in Touch with Siitecch</h3>
                    <div className="line-width">
                        <div className="line-color"></div>
                    </div>
                </section>

                <section className={`flex-container about ${theme}`}>
                    <div className="aboutUs feature">

                        <p>We had love to hear from you! Whether you have questions, feedback, or need assistance with your learning journey, feel free to reach out. Our team is here to support and guide you every step of the way. Let’s connect and make your development path even smoother.</p>
                    </div>

                    <div className="feature_box three">
                        <div className="test_image">
                            <div className="service-logo">
                                <IoLocationOutline />
                            </div>
                            <div className="image_details">
                                <h2>Our Location</h2>
                                <p>Africa, Nigeria.</p>
                            </div>
                        </div>

                    </div>
                    <div className="feature_box three">
                        <div className="test_image">
                            <div className="service-logo">
                                <FaPhone />
                            </div>
                            <div className="image_details">
                                <h2>Phone Number</h2>
                                <p>+2347016361129</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature_box three">
                        <div className="test_image">
                            <div className="service-logo">
                                <TfiEmail />
                            </div>
                            <div className="image_details">
                                <h2>Email Address</h2>
                                <p>ositakizito4@gmail.com</p>
                            </div>
                        </div>

                    </div>


                </section>

                <br />
                <section className="ends">
                    <div className="line-width none">
                        <div className="line-color center"></div>
                    </div>
                    <div className=""></div>
                </section>

            </section>

            <section className="materials">
                <section className="ends">
                    <h3>Get In Touch</h3>
                    <div className="line-width">
                        <div className="line-color"></div>
                    </div>
                </section>

                <section className={`flex-container about ${theme}`}>
                    <div className="aboutUs feature">
                        
                        <p>We Value Your Feedback Help Us Improve!</p>
                    </div>

                    <div className="feature_box three">
                        <form>
                            <input type="text" placeholder="Your Name" className="inputStyle" />
                            <input type="email" placeholder="Your Email" className="inputStyle" />
                            <input type="text" placeholder="Subject" className="inputStyle" />
                            <textarea cols="30" className="inputStyle" />
                            <input type="submit" value="Send Message" className="inputStyle btn" />
                        </form>

                    </div>



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