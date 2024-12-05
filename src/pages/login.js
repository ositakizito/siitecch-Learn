import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import Header from "../components/header";
import { Link } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function Login() {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  // Set up react-hook-form with validation
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  // Handle form submission
  const onSubmit = async (data) => {
    console.log("Form Data: ", data);
    // You would typically send a request to the backend for login here
  };

  return (
    <>
      <Header />
      <form className={`user ${theme}`} onSubmit={handleSubmit(onSubmit)}>
        <img src="images/login.svg" alt="Login logo" />
        
        {/* Email Input */}
        <input
          type="text"
          placeholder="johndoe@gmail.com"
          className="inputStyle"
          {...register("email")}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        {/* Password Input */}
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="inputStyle"
            {...register("password")}
          />
          <button
            type="button"
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errors.password && <p className="error">{errors.password.message}</p>}

        {/* Submit Button */}
        <input type="submit" value="Login" className="inputStyle btn" />

        <div className="lines">
          <div className="line one">
            <Link to="/register" className="linked">Not Registered?</Link>
          </div>
          <div className="line two">OR</div>
          <div className="line three">
            <Link to="/forgot" className="linked">Forgot password?</Link>
          </div>
        </div>

        {/* Google Login Button */}
        <button className="inputStyle google">
          <FaGoogle /> &nbsp;Sign In with Google
        </button>
      </form>
    </>
  );
}
