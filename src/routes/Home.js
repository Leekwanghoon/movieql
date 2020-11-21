import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';

class Home extends React.Component {
    state = {
        isLoading: false,
        movies: []
    };

    getMovies = async () => {
        const {
            data:
            {
                data: { movies }
            }
        } = await axios.get("https://yts.mx/api/v2/list_movies.json");
        this.setState({ movies })
    }

    async componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section>
                {isLoading ? (
                    <div>
                        <span>
                            Loading...
                        </span>
                    </div>
                ) : (
                        <div>
                            {movies.map(movie => (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                />
                            ))}
                        </div>
                    )
                }
            </section>
        );
    }
}

export default Home;