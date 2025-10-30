import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Regster from "./pages/Regster";
import { useEffect, useState, createContext } from "react";
import axios from "../src/axiosConfig";

export const AppState = createContext();
function App() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Optional: redirect early if no token
    if (!token) {
      navigate("/login");
      return;
    }

    async function checkUser() {
      try {
        const { data } = await axios.get("/users/checkusers", {
          headers: {
            Authorization: "Bearer " + token, // ✅ Corrected: 'headers' and space after 'Bearer'
          },
        });
        setUser(data);
      } catch (error) {
        console.log(error.response);
        navigate("/login");
      }
    }

    checkUser();
  }, [navigate]);

  return (
    <AppState.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regster />} />
      </Routes>
    </AppState.Provider>
  );
}
export default App;
