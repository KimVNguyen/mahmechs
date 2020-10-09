const data = require ('./tables/internalStructure.js').table;
const round = require('./helpers/calculations').round

module.exports = {
    getTable: (baseWeight) => {
        return data[baseWeight];
    },
    calculateWeight: (baseWeight, endoSteel) => {
        endoSteel || (endoSteel = false);
        if (endoSteel) {
            return round((baseWeight /10)/2, 0.5 );
        } else {
            return (baseWeight /10 )
        }
    }
}