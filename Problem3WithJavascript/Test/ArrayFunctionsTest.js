/// <reference path="jasmine.js"/>
/// <reference path="../ArrayFunctions.js"/>

describe("VerifyIfArrayHasDublicateValues", function () {
    it("WhenAreMixtValue_ReturnCorrectValue", function () {

        var myArray = [1,-1,3,5];

        var result = VerifyIfHasDublicateValues(myArray);

        expect(result).toBeFalsy();
    });

    it("WhenContainsOnlyNegativeValues_ReturnCorrectValue", function () {

        var myArray = [-1,-3,-55,-1];

        var result = VerifyIfHasDublicateValues(myArray);

        expect(result).toBeTruthy();
    });

    it("WhenContainsOnlyPositiveValues_ReturnCorrectValue", function () {

        var myArray = [31,314,5,7,9];

        var result = VerifyIfHasDublicateValues(myArray);

        expect(result).toBeFalsy();
    });

    it("WhenContainsOneValue_ReturnCorrectValue", function () {

        var myArray = [31];

        var result = VerifyIfHasDublicateValues(myArray);

        expect(result).toBeFalsy();
    });

    it("WhenContainsNoValues_ReturnCorrectValue", function () {

        var myArray = [];

        var result = VerifyIfHasDublicateValues(myArray);

        expect(result).toBeFalsy();
    });

});
