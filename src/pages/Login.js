import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Placeholder for your logo
const Logo = () => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <img
      src="https://coastalrenaissance.com.ng/wp-content/uploads/2022/08/court-logo.jpg" // Replace with the path to your JPEG logo
      alt="Logo"
      style={{
        width: "299px",
        height: "167px",
        marginBottom: "10px",
        borderRadius: "5px",
      }}
    />
    <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h1>
  </div>
);

const LoginForm = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      // Background color for the body
    },
    form: {
      border: "1px solid #ccc",
      padding: "20px",
      borderRadius: "8px",
      maxWidth: "400px",
      width: "100%",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)", // Optional: You can adjust the box shadow for the form
    },
    inputGroup: {
      marginBottom: "15px",
    },
    input: {
      width: "100%",
      padding: "8px",
      boxSizing: "border-box",
    },
    error: {
      color: "red",
      marginTop: "5px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    eyeIcon: {
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
    },
    passwordInput: {
      position: "relative",
    },
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    const newErrors = {};
    if (formData.username === "") {
      newErrors.username = "Username is required";
    }
    if (formData.password === "") {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);

    // If there are no errors, you can proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission logic here
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div style={{ ...styles.container }}>
      <form
        style={{ ...styles.form, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Logo />
        </div>

        <div style={{ ...styles.inputGroup }}>
          <input
            style={{ ...styles.input, borderRadius: "5px" }}
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <div style={{ ...styles.error }}>{errors.username}</div>
        </div>

        <div style={{ ...styles.inputGroup }}>
          <div style={{ ...styles.passwordInput }}>
            <input
              style={{
                ...styles.input,
                paddingRight: "30px",
                borderRadius: "5px",
              }}
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {showPassword ? (
              <FaEyeSlash
                style={{ ...styles.eyeIcon }}
                onClick={handleTogglePassword}
              />
            ) : (
              <FaEye
                style={{ ...styles.eyeIcon }}
                onClick={handleTogglePassword}
              />
            )}
          </div>
          <div style={{ ...styles.error }}>{errors.password}</div>
        </div>

        <button style={{ ...styles.button }} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
