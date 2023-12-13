import "./App.css";
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Player from "./Pages/Player";
import MoviesDetails from "./Pages/MoviesDetails";
import TvShowDetails from "./Pages/TvShowDetails";
import UserListedMovies from "./Pages/UserListedMovies";

const auth = getAuth();
function App() {
  //to check user authentication status
  const [user, setUser] = useState(null);
  //for keep track of users status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/player"
          element={user ? <Player /> : <Navigate to="/login" />}
        />
        <Route
          path="/movies"
          element={user ? <MoviesDetails /> : <Navigate to="/login" />}
        />
        <Route
          path="/tv"
          element={user ? <TvShowDetails /> : <Navigate to="/login" />}
        />
        <Route
          path="/mylist"
          element={user ? <UserListedMovies /> : <Navigate to="/login" />}
        />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
