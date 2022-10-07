import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from './useFetch';

const SingleMovie = () => {
    
  const { id } = useParams();
  const { loading, error, data: movie } = useFetch(`&i=${id}`); 

  if (loading) {
      return <div className="loading"></div>;
  }

  if (error.show) {
      return (
          <div className="page-error">
              <h1>{error.msg}</h1>
              <Link to="/" className='btn'> home pg </Link>
          </div>
      );
  }

  const {
      Poster: poster,
      Title: title,
      Type: type,
      Year: year,
  } = movie;

  return (
      <section className="single-movie">
          <img src={poster} alt={title} />
          <div className="single-movie-info">
              <h4 className="title">{title}</h4>
              <p>{type}</p>
              <p>{year}</p>
              <Link to="/" className="btn">
                  {" "}
                  home pg{" "}
              </Link>
          </div>
      </section>
  );
 
}

export default SingleMovie
