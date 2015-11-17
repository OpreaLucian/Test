function VerifyIfHasDublicateValues(array)
{
    var i=0;
    var j=i+1;

    while (i < array.length - 1 && j <= array.length)
    {
        if (array[i]==array[j])
        {
            return true;
        }

        if (j==array.length-1)
        {
            i++;
            j=i+1;
        }
        else
            j++;
    }

    return false;
}

function GetResult(array)
{
    if(VerifyIfHasDublicateValues(array))
        return "Yes";
    return "No";
}