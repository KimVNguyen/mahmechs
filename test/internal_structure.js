const chai = require('chai');
const internalStructure = require('../src/internalStructure')
const assert = chai.assert;

describe('Internal Structure Functions', function () {
    describe("Table Lookup", function () {
        it ('should return Undefined if invalid value is passed', function () {
            const record = internalStructure.getTable("10");
            assert.equal(record, undefined);
        });
        it ('should should return a record if a valid value is passed', function(){
            const record = internalStructure.getTable("20");
            assert.deepEqual(record, {
                head: '3',
                center_torso: '6',
                left_torso: '5',
                right_torso: '5',
                left_arm: '3',
                right_arm: '3',
                left_leg: '4',
                right_leg: '4',
                max_armor: '69/73'
              });
        });
    });
    describe("Tonnage Calculate", function () {
        it ('should calculate endosteel tonnage correctly', function (){
            const weight = internalStructure.calculateWeight(35,true)
            assert.equal(weight,2.0);
        });
        it ('should calculate standard tonnage correctly', function (){
            const weight = internalStructure.calculateWeight(35)
            assert.equal(weight,3.5);
        });
        it ('should return undefined if less than 20 tons is passed', function (){
            const weight = internalStructure.calculateWeight(15)
            assert.equal(weight,undefined);
        });
    });
});