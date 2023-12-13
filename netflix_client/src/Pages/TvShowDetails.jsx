import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavigationBar from "../Components/NavigationBar";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../Store/Store";
import Slider from "../Components/Slider";
import NotAvailable from "../Components/NotAvailable";
import SelectGenre from "../Components/SelectGenre";

const TvShowDetails = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!genres.length) dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "tv" }));
    }
  }, [genresLoaded]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <NavigationBar isScrolled={isScrolled} />
      <div className="data">
        <SelectGenre genres={genres} type="tv" />
        {movies.length ? (
          <>
            <Slider movies={movies} />
          </>
        ) : (
          <div className="not-available">
            <NotAvailable />
          </div>
        )}
      </div>
    </Container>
  );
};
const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      margin-top: 4rem;
    }
  }
`;

export default TvShowDetails;
