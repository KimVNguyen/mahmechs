const data = require ('./tables/engine.js').table;

module.exports = {
    getTable: (rating) => {
        return data[rating];
    },
    calculateRating: (tonnage, mp )=> {
        return (tonnage * mp)
    }
}