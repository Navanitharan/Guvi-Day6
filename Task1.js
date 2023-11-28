class Movie{
    constructor(title, studio, rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(movieArr){
        let PGmovies=movieArr.filter((movie)=>movie.rating==="PG");
        return PGmovies.map((movieDetails)=>movieDetails.title);
    }
}

let movie1=new Movie("Casino Royale", "Eon Productions", "PG-13");
let movie2=new Movie("Toy Story", "Pixar", "G");
let movie3=new Movie("The Avengers", "Marvel Studios", "PG-13");
let movie4=new Movie("The Lion King", "Disney", "PG");

let movieArr=[movie1,movie2,movie3,movie4];

console.log(movie1.getPG(movieArr));