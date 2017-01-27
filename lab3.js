/**
 * Created by Owner on 2017-01-27.
 */

//linking to the connect module
var connect = require('connect');
var url = require('url');
//creating an instance of 'connect'
var app = connect();

var calculate = function (req, res, next) {
        var qs = url.parse(req.url, true).query;
        var method = qs.method;
        var x = qs.x;
        var y = qs.y;
        switch (method){
            case 'add':
                    res.end(x + " + " + y + " = " + (parseInt(x) + parseInt(y)));
                break;
            case 'subtract':
                    res.end(x + " - " + y + " = " + (x-y));
                break;
            case 'multiply':
                    res.end(x + " * " + y + " = " + (x*y));
                break;
            case 'divide':
                    res.end(x + " / " + y + " = " + (x/y));
                break;
            default:
                    res.end("The method you entered in the url is inappropriate. Please try using another one.");
        }
    };

var index = function (req, res, next) {
    res.end('Home / Index Page');
};

app.use('/lab3', calculate);
app.use('', index);
//start the server on port 3000
app.listen(3000);
console.log("Connect server is running on port 3000");