function GetSumOfArrayElements(array) {
    for (var i = 0, sum = 0; i < array.length; sum += array[i++]);

    return sum;
}

function GetTwoLargestElementsOfArray(vector)
{
    var firstMaxim = vector[0];
    var secondMaxim = -10000000;

    if (vector.length == 1) {
        secondMaxim = firstMaxim;
    }
    else
        for (var i = 1; i < vector.length; i++) {
            if (vector[i] > firstMaxim) {
                secondMaxim = firstMaxim;
                firstMaxim = vector[i];
            }
            else if (vector[i] > secondMaxim && vector[i] <= firstMaxim)
                secondMaxim = vector[i];
        }

    return [firstMaxim, secondMaxim ];
}