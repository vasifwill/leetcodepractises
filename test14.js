let arr = "I am learning Web Dev"

const handle = () => {
    if(arr !== null){
        return arr
    }

    return arr.map(item => item == "a")
}

console.log(handle(arr))