var arr = [10,2,5,3]
var checkIfExist = function(arr) {
    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i]/2) !== -1 && arr.indexOf(arr[i]/2) !== i){
            return true;
        }
    }
    return false;
};

console.log(checkIfExist(arr))