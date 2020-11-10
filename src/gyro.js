const data = require ('./tables/gyro').table;
const round = require('./helpers/calculations').round

module.exports = {
    getTable: (type) => {
        return data[type];
    },
    calculateWeight: (type,engineRating) => {
        return round(engineRating/100, 0.5) * data[type]
    }

}
