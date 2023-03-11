let poem = "Like feeble age he reeleth from the day" //feeble
let peom1 = "Seeking that beauteous roof to ruinate" //beauteous
function mostPoeticalWord(poem) {
   // 1.Split the poem into words, 
   const words = poem.split(" ")
   //2.create an array of scores, an entry for each word. 
   let scores = []
   let count = 0
   let vowels = ['a','e','i','o','u','y']
   //3Count the vowels in each word, subtract from the score if K or X are in there, store this in the score array. 
   for(let i = 0; i< words.length-1;i++){
      for(let j = 0; j<words[i].length; j++){
         if(vowels.includes(words[i][j])){
            count=count+1  
         }else if ("k"== words[i][j]){
            count=count-1
         }else if ("x"== words[i][j]){
            count=count-2
         }

      }
      scores.push(count)
      count=0
     
      
   }
   let largest = Math.max(...scores)
   let index =scores.indexOf(largest)
   return words[index]
   
   //4.Run through the list of scores, from start to end, find the highest score, only count a higher score that occurs later in the score list. 
   //5.This should give the earliest, highest occurring score and corresponding word.
   
}


console.log(mostPoeticalWord(poem))