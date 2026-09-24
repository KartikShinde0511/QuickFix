import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const STRONG_PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      role: "",
    },
  });

  const navigate = useNavigate();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Registration data:", data);

    alert("Registration successful! Please login.");

    navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>QuickFix</h1>

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Full Name */}
          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              {...register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Name should contain only letters",
                },
              })}
            />

            {errors.fullName && (
              <p className="error">{errors.fullName.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="Enter 10-digit phone number"
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Enter a valid 10-digit number",
                },
              })}
            />

            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>

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

            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Create a strong password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: STRONG_PASSWORD_REGEX,
                  message:
                    "Min 8 characters with uppercase, lowercase, number and special character",
                },
              })}
            />

            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Re-enter your password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />

            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Address */}
          <div className="form-group">
            <label>Address</label>

            <textarea
              placeholder="Enter your full address"
              {...register("address", {
                required: "Address is required",
                minLength: {
                  value: 10,
                  message: "Address must be at least 10 characters",
                },
              })}
            ></textarea>

            {errors.address && (
              <p className="error">{errors.address.message}</p>
            )}
          </div>

          {/* Register Button */}
          <button type="submit">Register</button>
        </form>

        {/* Login Link */}
        <p className="register-login">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
