import Header from "../components/header";
import { useTheme } from "../context/themeContext";

export default function Forgot() {
    const {theme} = useTheme();

    return (
        <>
            <Header />
            <form className={`user ${theme}`}>
                <img src="images/login.svg" alt="Login logo" />
                <p style={{ textAlign: 'left',padding: '10px 5px' }}>Enter your email and we will send you instruction to reset your password.</p>
                <input type="text" placeholder="johndoe@gmail.com" className="inputStyle" />

                <input type="submit" value="Send Email" className="inputStyle btn" />
                <p style={{ textAlign: 'left',padding:'10px' }}>Do Not Sell My Personal Information.</p>
            </form>
        </>
    )
}