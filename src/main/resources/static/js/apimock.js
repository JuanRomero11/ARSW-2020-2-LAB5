apimock = (function () {

    var seats = [[true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true, true, true]];
    var mockdata = [];
    var function1Y = {"movie": {"name": "La vengaza de Karón", "genre": "Action"}, "seats": seats, "date": "2020-12-19 17:00"};
    var function2Y = {"movie": {"name": "El entierro de Andres": "Horror"}, "seats": seats, "date": "2020-12-19 19:40"};
    var function3Y = {"movie": {"name": "El entierro de Andres 2", "genre": "Action"}, "seats": seats, "date": "2020-12-19 14:30"};
    var function4Y = {"movie": {"name": "La vengaza de Danielo", "genre": "Drama"}, "seats": seats, "date": "2020-12-20 17:00"};

    mockdata["CineColombia"] = {"name": "CineColombia", "functions": [{"movie": {"name": "La vengaza de Karón", "genre": "Action"}, "seats": seats, "date": "2020-12-19 17:00"}, {"movie": {"name": "The Enigma 2", "genre": "Drama"}, "seats": seats, "date": "2018-12-18 15:30"}]};
    mockdata["cinemaX"] = {"name": "cinemaX", "functions": [function1Y, function2Y, function3Y, function4Y]};

    return {
        getFunctionsByCinema: function (cinema_name, callback) {
            callback(mockdata[cinema_name]);
        },
        getFunctionsByCinemaAndDate: function (cinema_name, fdate, callback) {
            callback(
                    mockdata[cinema_name].functions.filter(
                    funct => funct.date.includes(fdate))
            );
        }

    }

})();
