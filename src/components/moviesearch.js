import React, { useState } from 'react';
import './moviesearch.css';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data from TMDB');
      }

      const data = await response.json();
      setResults(data.results || []);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResults([]);
    }
  };

  return (
    <div className="movie-search-page">
      <h2>Movie Search</h2>
      <form onSubmit={searchMovies} className="movie-form">
        <input
          type="text"
          value={query}
          placeholder="Search for a movie..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      <ul className="movie-results">
        {results.map((movie) => (
          <li key={movie.id} className="movie-item">
  {movie.poster_path ? (
    <img
      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
      alt={`${movie.title} Poster`}
      className="movie-poster"
    />
  ) : (
    <div className="no-poster">No Image</div>
  )}
  <div className="movie-info">
    <strong>{movie.title}</strong> ({movie.release_date?.split('-')[0] || 'N/A'})
    <p>{movie.overview || 'No description available.'}</p>
  </div>
</li>

        ))}
      </ul>
    </div>
  );
}

export default MovieSearch;
