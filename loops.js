var loop = []

var forLoop = function(array){
  if (i === 1){
    array.push(`I am 1 stange loop.`);
  } else {
    for (let i = 0; i < 26; i++){
      array.push(`I am ${i} strange loops.`);
    }
  }
  console.log(loop)
}

forLoop(loop)