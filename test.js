

const students = [
    { name: 'Quincy', grade: 65 },
    { name: 'Jason', grade: 65 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];


    const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];



function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}

var newName = persons.map(getFullName);



console.log(newName)


let arr = [2, 3, 5, 7]

students.map(function(element, nums){
    console.log(element);
    console.log(nums);
    
    return element;
}, 80); // element: 2, index:0, array: [2, 3, 5, 7]
  



  