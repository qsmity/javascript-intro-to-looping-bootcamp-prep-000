var loop = []

var forLoop = function(array){
  if (array === 1){
    loop.push(`I am 1 stange loop.`);
  } else {
    for (let i = 0; i < 26; i++){
      loop.push(`I am ${i} strange loops.`);
    }
  }
  console.log(loop)
}