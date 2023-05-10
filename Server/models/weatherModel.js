const mongoose = require('mongoose');
var weatherData = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    temp:{
        type:Number,
        required:true
    },
    min_temp:{
        type:Number,
        required:true
    },
    max_temp:{
        type:Number,
        required:true
    },
    humidity:{
        type:Number,
        required:true
    },
    wind:{
        type:Number,
        required:true
    }
})
mongoose.model('weather',weatherData);