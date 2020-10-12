const chai = require('chai');
const assert = chai.assert;

describe('Engine Functions', function () {
    describe("Table Lookup", function () {
        it ('should return the correct values for the specified tonnage', function() {
            const record = {}
            assert.deepEqual(record, {'120': {
                ICE: '8.0',
                Cell: '5.0',
                Fission: '7.0',
                Comp: '6.0',
                Std: '4.0',
                Light: '3.0',
                XL: '2.0'
              }
            })
        });
        it ('should return the undefined for invalid tonnage', function() {
            const record = {}
            assert.equal(record, undefined);
        });
    });
    describe("Calculations", function () {
        it ('should calculate engine reating based upon walking speed and tonnage', function() {
            const rating = undefined
            assert.equal(rating, 300);
        });
    });


});