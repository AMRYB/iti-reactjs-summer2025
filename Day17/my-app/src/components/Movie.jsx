function Movie(props) {
  return (
    <div style={{backgroundColor: "lightblue",padding: 10,margin: 10,borderRadius: "5px",textAlign: "center",}}>
    <img src={props.poster_path ? `https://image.tmdb.org/t/p/w200/${props.poster_path}` : "https://via.placeholder.com/200x300?text=No+Image"} alt={props.title} />

      <h2>{props.title}</h2>
      <p>Original Title: {props.original_title}</p>
      <p>Release Date: {props.release_date}</p>
      <p>Overview: {props.overview}</p>
      <p>Adult: {props.adult ? "Yes" : "No"}</p>
    </div>
  );
}

export default Movie;