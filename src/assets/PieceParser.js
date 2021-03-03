
class PieceParser {
    API_POINT = "http://127.0.0.1:5000/";

    constructor (url) {
        this.url = url;
    }

    resolve() {
        return fetch(`${this.API_POINT}?url=${this.url}`).then(function(response) {
            return response.json();
        }).catch(function() {
          console.log("Could not fetch that.");
        });
    }
};

export default PieceParser;