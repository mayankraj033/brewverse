import { useState } from "react";
import { Link, useNavigate } from "react-router";
import api from "../../api/api";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login Successful");

      navigate("/");
    } catch (error: any) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0C0C12] px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-2xl bg-gray-900 p-8 shadow-xl"
      >
        <h1 className="text-3xl font-bold text-center text-secondary mb-8">
          Welcome Back
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 rounded-lg bg-gray-800 p-3 outline-none border border-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 rounded-lg bg-gray-800 p-3 outline-none border border-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-secondary py-3 font-semibold text-black hover:opacity-90"
        >
          Login
        </button>

        <p className="mt-5 text-center text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="text-secondary font-semibold"
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;