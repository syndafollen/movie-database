import { useState } from "react";
import axios from "axios";
import { Maybe } from "../../components";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../constants";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event?.target?.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event?.target?.value);
  };

  const handleSubmit = async () => {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });

    const accessToken = response.data.accessToken;
    const refreshToken = response.data.refreshToken;

    if (response.status === 200) {
      setUsername("");
      setPassword("");
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      setTimeout(() => {
        navigate("/profile");
      }, [3000]);
    }
  };

  return (
    <div>
      <Maybe
        when={!isRegistered}
        fallback={<h1 variant="h1">Successfully registered</h1>}
      >
        <div>
          <h1>Login Page</h1>
          <input
            onChange={handleUsernameChange}
            value={username}
            name="username"
          />
          <input
            onChange={handlePasswordChange}
            value={password}
            name="password"
          />
          <button onClick={handleSubmit}>Sign in</button>
          <Link to="/">
            <button>Back to main page</button>
          </Link>
        </div>
      </Maybe>
    </div>
  );
};
