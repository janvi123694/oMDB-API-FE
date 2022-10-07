import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
import SingleMovie from './SingleMovie'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const {movies, loading} = useGlobalContext()

  if (loading) {
      return <div className="loading"></div>;
  }

  return (
    <section className='movies'>
      {
        movies.map((movie) => {
            const {
              imdbID : id, 
              Poster : poster, 
              Title : title,
              Type : type,
              Year : year,
            } = movie
            return (
                <Link to={`/movies/${id}`} key={id} className="movie">
                    <article className="movie">
                        <img src={poster==='N/A'? url : poster} 
                        alt={title} 
                        />
                        <div className="movie-info">
                            <h4 className='title'>{title}</h4>
                            <p>{type}</p>
                            <p>{year}</p>
                        </div>
                    </article>
                </Link>
            );
        })
      }
    </section>
    )
}

export default Movies
