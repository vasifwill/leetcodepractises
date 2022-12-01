let person = {
    name: 'Rayan',
    age: 20,
    strength: 100
    }
    let warrior = {
    age: 36,
    strength: 1500
    }
    //I am going to assign warrior Object to person Object
    let myworrior = Object.assign(person, warrior);
    console.log(myworrior);
    OUTPUT : { name: 'Rayan', age: 36, strength: 1500 }
    // Did you see that, warrior object values overwrite person object values via using same key-feild.

    const object1 = {
        a: 'somestring',
        b: 42
      };
       // Object.entries(object1) 
      
      for (const [key, value] of Object.entries(object1)) {
        console.log(`${key}: ${value}`);
      }
     
// for array
      const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();