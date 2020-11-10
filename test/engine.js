const chai = require('chai');
const engine = require('../src/engine')
const assert = chai.assert;


describe('Engine Functions', function () {
    describe("Table Lookup", function () {
        it ('should return the correct values for the specified engine rating', function() {
            const record = engine.getTable("120")
            assert.deepEqual(record, {
                ICE: '8.0',
                Cell: '5.0',
                Fission: '7.0',
                Comp: '6.0',
                Std: '4.0',
                Light: '3.0',
                XL: '2.0'
        
            })
        });
        it ('should return the undefined for invalid engine rating', function() {
            const record = engine.getTable("700")
            assert.equal(record, undefined);
        });
    });
    describe("Calculations", function () {
        it ('should calculate engine rating based upon walking speed and tonnage', function() {
            const rating = engine.calculateRating(50,6)
            assert.equal(rating, 300);
        });
    });


});