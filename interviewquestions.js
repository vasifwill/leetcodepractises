let a = [1,1,2,42]
let b = { "name": "Manan" }
//console.log(a instanceof Array) //true
//console.log(b instanceof Array) //false


let employees = [
    {
        "id": 11,
        "name":"Abhinav",
        "salary":75000
    },
    {
        "id": 2131,
        "name":"Raj",
        "salary":62000
    },
    {
        "id": 3012,
        "name":"Raj",
        "salary":32000
    }]
let idsArray = []
for(let i = 0; i< employees.length; i++){
   idsArray.push(employees[i].id)
}
//console.log(idsArray) //[11,2131,3012]

//

let employees = [
    {
        "id": 11,
        "name":"Abhinav",
        "salary":75000
    },
    {
        "id": 2131,
        "name":"Raj",
        "salary":62000
    },
    {
        "id": 3012,
        "name":"Raj",
        "salary":32000
    }]
let idsArray = employees.map(employee => employee.id)
 //[11,2131,3012]
//

let employees = [
    {
        "id": 11,
        "name":"Abhinav",
        "salary":75000
    },
    {
        "id": 2131,
        "name":"Gaurav",
        "salary":62000
    },
    {
        "id": 3012,
        "name":"Raj",
        "salary":32000
    }]
let salaryAbove40K = employees.filter(employee => employee.salary > 40000)
//Array will contain objects whose salary is greater than 40000.

//
let employees = [
    {
        "id": 11,
        "name":"Abhinav",
        "salary":75000
    },
    {
        "id": 2131,
        "name":"Gaurav",
        "salary":62000
    },
    {
        "id": 3012,
        "name":"Raj",
        "salary":32000
    }]
let totalSalary = 0
for(let i = 0; i < employees.length ; i++){
   totalSalary = totalSalary + employees[i].salary
}
//169000

//

let employees = [
    {
        "id": 11,
        "name":"Abhinav",
        "salary":75000
    },
    {
        "id": 2131,
        "name":"Gaurav",
        "salary":62000
    },
    {
        "id": 3012,
        "name":"Raj",
        "salary":32000
    }]
let totalSalary = employees.reduce((a,employee)=> a + employee.salary, 0)
 //169000

///

let employees = [
    {
        "id": 11,
        "name":"Abhinav",
        "salary":75000
    },
    {
        "id": 2131,
        "name":"Gaurav",
        "salary":62000
    },
    {
        "id": 3012,
        "name":"Raj",
        "salary":32000
    }]
let employeeWithHighest = employees.reduce((a,employee)=> (a.salary || 0 ) > employee.salary ? a  : employee, {} )
console.log(employeeWithHighest) //Answer will the object of Abhinav
