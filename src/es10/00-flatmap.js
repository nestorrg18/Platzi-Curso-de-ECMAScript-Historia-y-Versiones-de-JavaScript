const array = [1,1,2,8,[8,6,5,[1,5]]];
console.log(array.flat(3))

const array2 = [1,1,2,8];
console.log(array2.flatMap(v=>[v,v*2]))