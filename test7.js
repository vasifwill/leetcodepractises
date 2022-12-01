let a = [0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0 ];

function traversal (a){

    let y = 0
    let x = 0

    while(y<a.length){
        if(a[y] == 0){
            let temp = a[x]
            a[x] = a[y]
            a[y]=temp
            x++
            y++
        }else {
            y++
        }
    }
    return a
   
}

console.log(traversal(a))