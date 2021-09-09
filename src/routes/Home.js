import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoding: false,
    moviesList: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json', {
      params: {
        limit: 20,
        sort_by: 'rating'
      }
    });

    this.setState({ moviesList: movies });
  };

  componentDidMount() {
    this.getMovies();
  }

  renderMovie() {
    return this.state.moviesList.map(movie => (
      <Movie
        key={movie.id}
        id={movie.id}
        poster={movie.medium_cover_image}
        title={movie.title}
        year={movie.year}
        rating={movie.rating}
        summary={movie.summary}
      />
    ));
  }

  render() {
    return <div className="Home">{this.renderMovie()}</div>;
  }
}

export default Home;
