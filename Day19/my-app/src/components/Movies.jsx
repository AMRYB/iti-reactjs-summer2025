import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7";

function MovieCard(props) {
  const navigate = useNavigate();
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img
          src={props.poster_path ? `https://image.tmdb.org/t/p/w200/${props.poster_path}` : "https://via.placeholder.com/200x300?text=No+Image"}
          className="card-img-top"
          alt={props.title}
        />
        <div className="card-body d-flex flex-column">
          <h2 className="h6 card-title mb-2 text-truncate">{props.title}</h2>
          <div className="mt-auto d-grid">
            <button className="btn btn-primary" onClick={() => navigate(`/movie/${props.id}`, { state: { movie: props } })}>
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-5">Loading...</div>;

  return (
    <div className="container py-4">
      <h1 className="h4 mb-3">Popular Movies</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {movies.map((m) => <MovieCard key={m.id} {...m} />)}
      </div>
    </div>
  );
}
