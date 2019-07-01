var http = require('http')
export default class LessonsService {
    load()
    {
        return http.getJSON("https://rapid-scion-245323.appspot.com/api/lessons").then(r => {
            return r.data
        }, e => {
            console.log(e);
        })
    }
}