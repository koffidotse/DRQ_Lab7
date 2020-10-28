import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

//create a read class to import in state of movies
export class Read extends React.Component {
    state={
        movies: [ ]
    };

    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then(
                (response) => {
                    this.setState({ movies: response.data.Search })

                })
            .catch((error) => {
                console.log(error)
            });
    }


    render(){
        return(//passing movie object to movies
            <div>
                <h1>This is the read component.</h1>
                <Movies movies={this.state.movies}></Movies> 
            </div>
        );
    }
}