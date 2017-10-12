import {TheMovieDbAPI} from "./libs/themoviedb/themoviedb.lib";


let api = new TheMovieDbAPI("token here");
api.findMovie("transfomers").then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

