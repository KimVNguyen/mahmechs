const chai = require('chai');
const gyro = require('../src/gyro')
const assert = chai.assert;


describe('Gyro Functions', function () {
    describe("Table Lookup", function () {
        it ('should return the correct values for the specified Gyro Type', function() {
            const record = {};
            assert.deepEqual(record, 2.0)
        });
        it ('should return the undefined for invalid engine rating', function() {
            const record = {};
            assert.equal(record, undefined);
        });
    });
    describe("Calculations", function () {
        it ('should calculate gyro weight correctly', function() {
            const weight = {};
            assert.equal(weight, 2);
        });
    });


});