import React, { useState } from "react";

import { useForm } from "react-hook-form";
import "../../CSS/Auth.css";

import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {

    // ==========================================
    // USER LOGIN
    // ==========================================

    if (
      data.email === "user@gmail.com" &&
      data.password === "user123"
    ) {

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "USER");
      localStorage.setItem("email", data.email);

      navigate("/dashboard");

      return;
    }


    // ==========================================
    // SERVICE PROVIDER LOGIN
    // ==========================================

    if (
      data.email === "provider@gmail.com" &&
      data.password === "provider123"
    ) {

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "SERVICE_PROVIDER");
      localStorage.setItem("email", data.email);

      navigate("/provider/dashboard");

      return;
    }


    // ==========================================
    // ADMIN LOGIN
    // ==========================================

    if (
      data.email === "admin@gmail.com" &&
      data.password === "admin123"
    ) {

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "ADMIN");
      localStorage.setItem("email", data.email);

      navigate("/admin/dashboard");

      return;
    }


    // ==========================================
    // INVALID LOGIN
    // ==========================================

    alert("Invalid email or password");
  };


  return (

    <div className="login-container">

      <div className="login-box">

        <h1>
          QuickFix
        </h1>

        <h2>
          Login
        </h2>


        <form onSubmit={handleSubmit(onSubmit)}>


          {/* ================= EMAIL ================= */}

          <div className="form-group">

            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",

                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />

            {errors.email && (
              <p className="error">
                {errors.email.message}
              </p>
            )}

          </div>


          {/* ================= PASSWORD ================= */}

          <div className="form-group">

            <label>
              Password
            </label>

            <div style={{ position: "relative" }}>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",

                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                style={{ paddingRight: "45px" }}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  left: "140px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  padding: "5px",
                  fontSize: "18px",
                }}
              >
                {showPassword ? "👁️" : "👁️"}
              </button>

            </div>

            {errors.password && (
              <p className="error">
                {errors.password.message}
              </p>
            )}

          </div>


          {/* ================= LOGIN BUTTON ================= */}

          <button type="submit">
            Login
          </button>
            <br></br>

          {/* ================= REGISTER ================= */}
            <br></br>
          <p>

            Don't have an account?{" "}

            <Link to="/register">
              Register here
            </Link>

          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;