const Movie = (props) => {
    console.log(props);
    const { id, title, year, rating } = props;

    return (
        <div style={{ backgroundColor: "lightblue", padding: 10, margin: 10, borderRadius: "5px" }}>
            <h1>ID: {id}</h1>
            <h2>Title: {title}</h2>
            <h3>Year: {year}</h3>
            <h3>Rating: {rating}</h3>
        </div>
    );
}

export default Movie;
