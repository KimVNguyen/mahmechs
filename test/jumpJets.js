const chai = require('chai');
const jumpJets = require('../src/jumpJets')
const assert = chai.assert;

describe('Jump Jet Functions', function () {
    describe("Table Lookup Standard Jump Jets", function () {
        it ('should return the correct weight for 10-55 ton range', function() {
            const record = jumpJets.getTable(35,"standard");
            assert.deepEqual(0.5, record)
        });
        it ('should return the correct weight for 60-85 ton range', function() {
            const record = jumpJets.getTable(75,"standard");
            assert.equal(1.0, record);
        });
        it ('should return the correct weight for 90-100 ton range', function() {
            const record = jumpJets.getTable(100,"standard");
            assert.equal(2, record);
        });        
        it ('should return the undefined weight for invalid ton range', function() {
            const record = jumpJets.getTable(125,"standard");
            assert.equal(undefined, record);
        });
    });
    describe("Table Lookup Advanced Jump Jets", function () {
        it ('should return the correct weight for 10-55 ton range', function() {
            const record = jumpJets.getTable(35,"advanced");
            assert.deepEqual(1, record)
        });
        it ('should return the correct weight for 60-85 ton range', function() {
            const record = jumpJets.getTable(75,"advanced");
            assert.equal(2, record);
        });
        it ('should return the correct weight for 90-100 ton range', function() {
            const record = jumpJets.getTable(100,"advanced");
            assert.equal(4, record);
        });
        it ('should return the undefined weight for invalid ton range', function() {
            const record = jumpJets.getTable(125,"advanced");
            assert.equal(undefined, record);
        });
    });
    describe("Calculations", function () {
        it ('should calculate the correct weight for 10-55 ton rangee', function() {
            const record = jumpJets.calculateWeight(35,"standard", 5)
            assert.equal(2.5, record);
        });
        it ('should calculate the correct weight for 60-85 ton rangee', function() {
            const record = jumpJets.calculateWeight(75,"advanced", 5)
            assert.equal(10, record);
        });
        it ('should calculate the correct weight for 90-100 ton rangee', function() {
            const record = jumpJets.calculateWeight(100,"advanced", 5)
            assert.equal(20, record);
        });
    });
});
