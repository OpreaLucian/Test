/// <reference path="jasmine.js"/>
/// <reference path="../ArrayFunctions.js"/>

describe("GetSumOfArrayElements_", function () {
    it("WhenAreMixtValue_ReturnCorrectValue", function () {

        var myArray = [-1, 2, -3];

        var result = GetSumOfArrayElements(myArray);

        expect(result).toBe(-2);
    });

    it("WhenAreOnlyNegativeValues_ReturnCorrectValue", function () {

        var myArray = [-1, -2, -3];

        var result = GetSumOfArrayElements(myArray);

        expect(result).toBe(-6);
    });

    it("WhenArrayHasOnlyPositiveValues_ReturnCorrectValue", function () {
        var myArray = [1, 2, 3];

        var result = GetSumOfArrayElements(myArray);

        expect(result).toBe(6);
    });

    it("WhenArrayHasNoValues_ReturnCorrectValue", function () {
        var myArray = [];

        var result = GetSumOfArrayElements(myArray);

        expect(result).toBe(0);
    });

    it("WhenArrayHasOneValue_ReturnCorrectValue", function () {
        var myArray = [-1];

        var result = GetSumOfArrayElements(myArray);

        expect(result).toBe(-1);
    });
});
