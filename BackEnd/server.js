const express = require('express')
const app = express()
const port = 4000 //importing different port 
const cors = require('cors')//including the cors in server
const bodyParser = require('body-parser');//body parser
const mongoose = require('mongoose');//mongodb

app.use(cors());//to use this app cors any time
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// connecting server to database
const myConnectionString ='mongodb+srv://admin:1234@cluster0.b6uec.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, {useNewUrlParser: true});

//generate a schema
const Schema = mongoose.Schema;

var movieSchema = new Schema({
    title:String,
    year:String,
    poster:String
});
//Generating movie model
var MovieModel = mongoose.model("movie", movieSchema);

app.get('/api/movies', (req, res)=>{

 
    //  const mymovies =[
    //      {
    //          "Title":"Avengers: Infinity War",
    //         "Year":"2018",
    //         "imdbID":"tt4154756",
    //         "Type":"movie",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //         },
    //       {
    //         "Title":"Captain America: Civil War",
    //         "Year":"2016",
    //         "imdbID":"tt3498820",
    //         "Type":"movie",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //          },
    //         {
    //          "Title":"World War Z",
    //          "Year":"2013",
    //         "imdbID":"tt0816711",
    //        "Type":"movie",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"}
    //          ,{
    //         "Title":"War of the Worlds",
    //         "Year":"2005",
    //         "imdbID":"tt0407304",
    //         "Type":"movie",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
    //         }
            
    //  ];
    
    MovieModel.find((err, data)=>{
        res.json(data);
    })
    // res.status(200).json({//passing the movie hard code
    //     message:"movies for live!",
    //     movies :mymovies
})
    app.get('/api/movie/:id',(req,res)=>{
        console.log(req.params.id);

        MovieModel.findById(req.params.id,(err,data)=>{//return by movie id
            res.json(data);
        })
    })
    
       //passing data to server and log data to console.
app.post('/api/movies', (req,res)=>{
    console.log('movies received!');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

    MovieModel.create({
        title:req.body.title,
        year:req.body.year,
        poster:req.body.Poster

    })
    res.send('Item Added');   
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})