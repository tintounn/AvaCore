import * as axios from "axios";

export class TheMovieDbAPI {
  
  private apiKey: string;
  private url: string = "https://api.themoviedb.org/3";
  
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  findSerie(value: string) {
    
  }

  findMovie(value: string) {
    return axios.default.get(this.url + "/search/movie", {params: {api_key: this.apiKey, query: value}, proxy: {host: '10.35.0.248', port:8080}});
  }
}