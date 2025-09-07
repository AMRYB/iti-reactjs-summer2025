import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import { v4 as id } from "uuid";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
      )
      .then((res) => this.setState({ movies: res.data.results }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        {this.state.movies.map((mov) => (
          <Movie key={id()} {...mov} />
        ))}
      </div>
    );
  }
}

export default Movies;
