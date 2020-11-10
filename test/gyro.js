const chai = require('chai');
const gyro = require('../src/gyro');
const assert = chai.assert;


describe('Gyro Functions', function () {
    describe("Table Lookup", function () {
        it ('should return the correct values for the specified Gyro Type', function() {
            const record = gyro.getTable("xl");
            assert.deepEqual(0.5, record )
        });
        it ('should return the undefined for invalid engine rating', function() {
            const record = gyro.getTable("invald");
            assert.equal(undefined, record );
        });
    });
    describe("Calculations", function () {
        it ('should calculate gyro weight correctly', function() {
            const weight = gyro.calculateWeight("compact",160);
            assert.equal(3, weight);
        });


    });
});