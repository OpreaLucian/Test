/// <reference path="jasmine.js"/>
/// <reference path="../ArrayFunctions.js"/>

describe("GetTwoLargestElementsOfArray_", function () {
    it("WhenAreMixtValue_ReturnCorrectValue", function () {

        var myArray = [0, -2, 1, -4, 3];

        var result = GetTwoLargestElementsOfArray(myArray);

        expect(result[0]).toBe(3);
        expect(result[1]).toBe(1);
    });

    it("WhenArePossitiveValues_ReturnCorrectValue", function () {

        var myArray = [0, 2, 4, 6, 1];

        var result = GetTwoLargestElementsOfArray(myArray);

        expect(result[0]).toBe(6);
        expect(result[1]).toBe(4);
    });

    it("WhenAreNegativeValues_ReturnCorrectValue", function () {

        var myArray = [-2, -4, -6, -1];

        var result = GetTwoLargestElementsOfArray(myArray);

        expect(result[0]).toBe(-1);
        expect(result[1]).toBe(-2);
    });

    it("WhenArrayHasOneValue_ReturnCorrectValue", function () {

        var myArray = [-1];

        var result = GetTwoLargestElementsOfArray(myArray);

        expect(result[0]).toBe(-1);
        expect(result[1]).toBe(-1);
    });

    it("WhenArrayHasSameValues_ReturnCorrectValue", function () {

        var myArray = [-2,-2,-2,-2];

        var result = GetTwoLargestElementsOfArray(myArray);

        expect(result[1]).toBe(-2);
    });

    it("WhenArrayHasNoValues_ReturnCorrectValue", function () {

        var myArray = [];

        var result = GetTwoLargestElementsOfArray(myArray);

        expect(result[0]).toBeUndefined();
    });
});
