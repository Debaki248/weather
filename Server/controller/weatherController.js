
const mongoose = require('mongoose');
const weather = require('../models/weatherModel');
const weatherModel = mongoose.model('weather');
module.exports.weatherInfo=async(req,res)=>{
    var weatherInformation = new weatherModel();
    weatherInformation.name = req.body.name,
    weatherInformation.temp = req.body.temp,
    weatherInformation.min_temp =  req.body.min_temp;
    weatherInformation.max_temp = req.body.max_temp;
    weatherInformation.humidity = req.body.humidity;
    weatherInformation.wind = req.body.wind;
    if(weatherInformation){
        res.status(200).json(weatherInformation);
    }else{
        res.status(500).json("Error ")
    }
    await weatherInformation.save();
}
module.exports.weatherData = async(req,res)=>{
    console.log("inside weatherData");
    console.log(req.params.cityName);
    const weatherData = await weatherModel.findOne({name:req.params.cityName});
    if(weatherData){
        res.send(weatherData);
    }else{
        res.send("404 error");
    }
}
module.exports.deleteWeatherData=async(req,res)=>{
    console.log("inside delete");
    const weatherId = weatherModel.findByIdAndRemove(req.params.id).then(weather=>{
        if(weather){
            res.send("Deleted sucessfully");
        }else{
            res.send("404 not found");
        }
    });

}