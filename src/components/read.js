import React from 'react';
import { Movies } from './movies';
import axios from 'axios';


//create a read class to import in state of movies
export class Read extends React.Component {
    state = {
        movies: []
    };


    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')//replace the json by the url
            .then(
                (response) => {
                    this.setState({ movies: response.data })

                })
            .catch((error) => {
                console.log(error)
            });
    }


    render() {
        return (//passing movie object to movies
            <div>
                <h1>This is the read component.</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>

        );
    }

}