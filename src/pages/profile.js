import Header from "../components/header";
import { useTheme } from "../context/themeContext";

export default function Profile() {
    const { theme } = useTheme();

            return (
                <>
                    <Header />
                    <section className={`profile ${theme}`}>
                        <div className="profile-image">
                            <img src="images/siitecch.png" alt="" />
                        </div>
                        <div className="profile-info">
                            <div className="student-email">
                                <p>Email: johndoe@gmail.com</p>
                            </div>
                            <div className="student-email">
                                <p>Role: Student</p>
                            </div>
                            <div className="button-logout">
                                <button>Logout</button>
                            </div>
                        </div>
                    </section>
                </>
            );

   
}