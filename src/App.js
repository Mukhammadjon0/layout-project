import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { StateContext } from "./context";
import { initialState, reducer } from "./reducer";
import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MovieDetail from "./pages/MovieDetail";
import ProtectedRoutes from "../ProtectedRoutes";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/main" element={<Main />} />
            <Route path="/movieDetail/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </div>
    </StateContext.Provider>
  );
}

export default App;
