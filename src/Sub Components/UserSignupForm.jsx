import React, { useState } from "react";
import "./UserSignupForm.css";

function UserSignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate successful signup
    console.log("User signed up:", formData);
    setSuccess("Signup successful!");
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  const handleSocialLogin = (platform) => {
    console.log(`Login with ${platform}`);
    // Here you'd redirect or initiate OAuth for Google/Facebook/etc.
  };

  return (
    <div className="signupFormContainer">
      <form className="signupForm" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        {error && <p className="errorText">{error}</p>}
        {success && <p className="successText">{success}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button className="spbtn-primary" type="submit">Sign Up</button>

        <div className="formFooter">
          <p>Already have an account? <a href="/login">Login here</a></p>
        </div>

        <div className="socialLogin">
          <p>Or sign up with</p>
          <div className="socialButtons">
            <button type="button" className="google" onClick={() => handleSocialLogin("Google")}>
              🔵 Google
            </button>
            <button type="button" className="facebook" onClick={() => handleSocialLogin("Facebook")}>
              🔷 Facebook
            </button>
            <button type="button" className="github" onClick={() => handleSocialLogin("GitHub")}>
              ⚫ GitHub
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserSignupForm;
