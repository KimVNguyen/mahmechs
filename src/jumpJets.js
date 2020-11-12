const data = require ('./tables/jumpJets.js').table;

module.exports = {
    getTable: (tonnage,type) => {
        return data(tonnage)[type]
    },
    calculateWeight: (tonnage, type, mp) => {
        return (data(tonnage)[type] * mp)
        
    }

}
