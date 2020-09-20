api = (function () {


    function getFunctionsByCinema(cinema_name, callback) {//cinemas/{nombre}
        $.getJSON("http://localhost:8080/cinemas/" + cinema_name, function (data) {
            callback(data);
        });
    }

    function getFunctionsByCinemaAndDate(cinema_name, fdate, callback) {//cinemas/{nombre}/{fecha}
        $.getJSON("http://localhost:8080/cinemas/" + cinema_name +"/"+ fdate, function (data) {
            callback(data);
        });
    }

    function getFunctionByNameAndDate(cinema_name, fdate, movie_name, callback) {//cinemas//{nombre}/{fecha}/{nombrePelicula}
        $.getJSON("http://localhost:8080/cinemas/"+cinema_name+"/"+ fdate+"/"+movie_name, function (data) {
            callback(data);
        });
    }

    return {
        getFunctionsByCinema: getFunctionsByCinema,
        getFunctionsByCinemaAndDate: getFunctionsByCinemaAndDate,
        getFunctionByNameAndDate: getFunctionByNameAndDate
    }

})();

