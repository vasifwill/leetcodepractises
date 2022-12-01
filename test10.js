
let list1 = [1,2,4]
let list2 = [1,3,4]
const mergeTwoLists = function(list1, list2) {
    let emptyArr = []
    if(list1 == null && list2 == null){
        return emptyArr
    }else if(list1 == null){
        return  list2
    }else if(list2 == null) {
        return list1
    }else{
        let result = [...list1, ...list2]
    return result.sort()

    }
    
    
};

console.log(mergeTwoLists(list1, list2))