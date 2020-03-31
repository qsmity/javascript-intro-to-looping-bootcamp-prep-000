var loop = []

var forLoop = function(array){
  for (let i = 0; i < 25; i++){
    if (i === 1){
      array.push(`I am 1 strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}


var whileLoop = function(num){
  while (num > 0) {
    console.log(num--)
  }
  return "done"
}


forLoop(loop)
console.log(whileLoop(10))

