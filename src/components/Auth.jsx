import { useState } from "react";
import Home from "./Home";
import Sha1 from "crypto-js/sha1";

function Auth() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    const hash = Sha1(password).toString();
    const correctHash = process.env.REACT_APP_web_password;
    if (hash === correctHash) {
      setIsAuthenticated(true);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={styles.loginContainer}>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleLogin} style={styles.button}>
          Enter
        </button>
        {error && <p style={styles.error}>wrong password</p>}
      </div>
    );
  }

  return <Home />;
}

const styles = {
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "rgba(10, 10, 10, 0.8)",
  },
  input: {
    margin: "16px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#28a745",
    color: "#fff",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
};

export default Auth;
