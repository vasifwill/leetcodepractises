
 
// Javascript program to find the first, second
// and third minimum element in an array
let array = [4, 9, 1, 32, 12];
let n = array.length; 
let MAX = 100000
 
function Print3Smallest( array,  n){
    
    let firstmin = MAX, secmin = MAX, thirdmin = MAX;
    for (let i = 0; i < n; i++)
    {
        /* Check if current element is less than
           firstmin, then update first, second and
           third */
        if (array[i] < firstmin)
        {
            thirdmin = secmin;
            secmin = firstmin;
            firstmin = array[i];
        }
 
        /* Check if current element is less than
        secmin then update second and third */
        else if (array[i] < secmin)
        {
            thirdmin = secmin;
            secmin = array[i];
        }
 
        /* Check if current element is less than
        then update third */
        else if (array[i] < thirdmin)
            thirdmin = array[i];
    }
 
    document.write("First min = " + firstmin + "</br>");
    document.write("Second min = " + secmin + "</br>");
    document.write("Third min = " + thirdmin + "</br>");
}
 
     
    // Driver program
     
  
    Print3Smallest(array, n);

    /*output 
    First min = 1, 
    Second min = 4  
    Third min = 9
    */
