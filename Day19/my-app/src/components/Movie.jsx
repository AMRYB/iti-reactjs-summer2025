import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Movie() {
  const { id } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(location.state?.movie || null);

  useEffect(() => {
    if (!movie) {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`)
        .then(res => res.json())
        .then(setMovie);
    }
  }, [id, movie]);

  if (!movie) return <div className="text-center py-5">Loading...</div>;

  return (
    <div className="container py-4">
      <div className="row g-4">
        <div className="col-12 col-md-4">
          <img
            className="img-fluid rounded shadow-sm"
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : "https://via.placeholder.com/200x300?text=No+Image"}
            alt={movie.title}
          />
        </div>
        <div className="col-12 col-md-8">
          <h2 className="h4">{movie.title}</h2>
          <p><strong>Original Title:</strong> {movie.original_title}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Adult:</strong> {movie.adult ? "Yes" : "No"}</p>
        </div>
      </div>
    </div>
  );
}
