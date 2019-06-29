var http = require('http')

export default class LessonsService {
    load()
    {
        return http.getJSON("https://pokeapi.co/api/v2/pokemon/?limit=20").then(result => {
            return result.results
        }, error => {
            console.log(error);
        });
    }
}