import React from 'react';
import {MovieItem} from './movieItem';

export class Movies extends React.Component {
    render(){
        return this.props.movies.map((movie)=>{
            return <MovieItem movie ={movie}></MovieItem>// map uses the callback function
        });
            //(
           // <div>
               // <h1>This is the Movies component.</h1>
               // {console.log(this.props.movies)}
               // <Movies></Movies>
           // </div>
       // );
    }
}