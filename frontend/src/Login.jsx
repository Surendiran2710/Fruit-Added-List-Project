import React, { useState } from "react";
import AddFruit from "./AddFruit";
import videoFile from "./assets/video/background1.mp4";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ email: "", password: "", confirmPassword: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (isLogin) {
      const userExists = storedUsers.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (userExists) {
        alert("Logged in successfully!");
        setIsAuthenticated(true);
      } else {
        alert("Invalid email or password. Please sign up first!");
      }
    } else {
      const userExists = storedUsers.find((user) => user.email === formData.email);

      if (userExists) {
        alert("User already exists! Please log in.");
        setIsLogin(true);
      } else {
        const updatedUsers = [...storedUsers, { email: formData.email, password: formData.password }];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        alert("Signed up successfully! Please log in.");
        setIsLogin(true);
      }
    }
  };

  if (isAuthenticated) {
    return <AddFruit />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoFile}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="w-full max-w-md p-8 bg-white bg-opacity-85 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={toggleForm}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
