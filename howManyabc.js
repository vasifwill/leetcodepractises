const sampleArray = ['a', 'b', 'c', 'd', 'd', 'e', 'a', 'b', 'c', 'f', 'g', 'h', 'h', 'h', 'e', 'a'];
const counts = {};

sampleArray.forEach(x => { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)

//onsole.log(arrays)