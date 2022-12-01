const students = [
    { name: 'Quincy', grade: 65 },
    { name: 'Jason', grade: 65 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];

  const grades = students.map(item => item.grade)
 

  

const duplicateGrade = grades.filter((item, index) => index !== grades.indexOf(item))


function findName (students ){
  var arrayName = []
  for(var i = 0; i<students.length ;i++) {
    if(students[i].grade == duplicateGrade[0]) {
      arrayName.push(students[i].name, students[i].grade)
    } else null
  }

  return arrayName

}

console.log(findName(students))






