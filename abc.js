var array = "abcabcfed"

function longestString (array) {
    var max = 0
    var currentString = ""

    for(var i = 0; i < array.length; i++) {
        var charecters = array.charAt(i)
        var pos = currentString.indexOf(charecters)
        if(pos !== -1) {
            currentString = currentString.substring(pos+1)

        }
        currentString = currentString + charecters
        max = Math.max(max, currentString.length)


    }
    return max
}

console.log(longestString(array))