/*There are two arrays with individual values.
Write a JavaScript program to compute the sum of each individual index value in the given array.

array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];

Expected Output :
[4, 5, 8, 10, 12, 13]*/

let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];

let array3 = array2.reduce(function (array3, array2Index, i)
{
    let v1 = array1[i] || 0;
    let v2 = array2Index || 0;

    array3.push(v1 + v2);
    return array3;
}, []);

console.log(array3);