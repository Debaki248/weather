const mongoose = require('mongoose');
const conn = mongoose.connect('mongodb://localhost:27017/weatherData');
if(conn){
    console.log("connection Established");
}else{
    console.log("Connection not Established");
}