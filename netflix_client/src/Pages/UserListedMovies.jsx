import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NavigationBar from "../Components/NavigationBar";
import Card from "../Components/Card";
import { getUsersLikedMovies } from "../Store/Store";

import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();

const UserListedMovies = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(undefined);

  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) setUser(currentUser.email);
    else navigate("/login");
  });

  useEffect(() => {
    if (user) {
      dispatch(getUsersLikedMovies(user));
    }
  }, [user]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <NavigationBar isScrolled={isScrolled} />
      <div className="content flex column">
        <h1>My List</h1>
        <div className="grid flex">
          {movies.map((movie, index) => {
            return (
              <Card
                movieData={movie}
                index={index}
                key={movie.id}
                isLiked={true}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .content {
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;
    h1 {
      margin-left: 3rem;
    }
    .grid {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;

export default UserListedMovies;
