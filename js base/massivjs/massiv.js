let Arr = [1, 2, 3, 4];

function sumArr(Arr)
{
    let sum = 0;
    Arr.forEach(item => 
        {
            sum = sum + item;
        });
        return sum;
}

console.log(sumArr(Arr));