
var allLocations = [[1,2], [3,4], [1,-1]]
var numDeliveries = 2
function deliveryPlan(allLocations) {
    var newMap = new Map()
    let newArray = []
    
    //let answer = []
    for (var i = 0; i < allLocations.length; i++){
           newArray.push(Math.sqrt((allLocations[i][0] *allLocations[i][0]) + (allLocations[i][1] *allLocations[i][1])) )
    } 

    for(j = 0; j < newArray.length; j++ ){
        newMap.set(newArray[j], allLocations[j])
        
    }

    let firstMin = 10000, secondMin = 10000,  firstValue = 0, secondValue = 0
    newMap.forEach((value, key) => {
        if(key < firstMin){
            secondValue = firstValue
            firstValue = value
            secondMin = firstMin
            firstMin = key
            

        } else if (key < secondMin) {
            secondMin = key
            secondValue = value

        }
    })



    

    console.log(firstValue)
    return secondValue
        
        }
console.log(deliveryPlan(allLocations))