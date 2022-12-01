var head = [1,2,3,4,5,6]

var reverseList = function(head) {
  // End of the reversed linked list set to null
  let prev = null;
  
  // Traverse through the given linked list
  while (head) {
      const temp = head.next;     // References the next Node of given linked list
      head.next = prev;       // head.next point to previous Node, instead of the next Node of the given linked list
      prev = head;        // Move the prev Node pointer up to head
      head = temp;        // Move the head up to next Node of the given linked list
  }
  
  // Prev is the reversed linked list
  return prev;
};
  console.log(reverseList(head))

  
  
  var reverseString = function(head) { return head.split('').reverse().join('')};


  function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

var a = [3,5,7,8]
var b = reverseArr(a);