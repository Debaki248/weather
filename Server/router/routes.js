const exp = require('express');
const router = exp.Router();
require('../models/weatherModel')
const controller = require('../controller/weatherController');

router.post('/weather',controller.weatherInfo);
router.get('/weatherData/:cityName',controller.weatherData);
router.delete('/weatherData/:id',controller.deleteWeatherData);
module.exports = router;