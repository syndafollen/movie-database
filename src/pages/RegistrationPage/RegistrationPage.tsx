import { useState } from "react";
import axios from "axios";
import { Maybe } from "../../components";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../constants";

export const RegistrationPage = () => {
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
    const response = await axios.post(`${API_URL}/register`, {
      username,
      password,
    });
    // console.log("response:", response);
    if (response.status === 201) {
      setIsRegistered(true);
      setUsername("");
      setPassword("");
      setTimeout(() => {
        navigate("/login");
      }, [3000]);
    }
  };

  return (
    <div>
      <Maybe when={!isRegistered} fallback={<h1>Successfully registered</h1>}>
        <div>
          <h1>Registration Page</h1>

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
          <button onClick={handleSubmit}>Sign up</button>
          <Link to="/">
            <button>Back to main page</button>
          </Link>
        </div>
      </Maybe>
    </div>
  );
};
