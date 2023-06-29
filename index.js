// function infiniteLoop(arr, d, n){
//   let resultArray = []

// if (d === 'left') {

//   for (let i = 0; i < n; i++) {
//     arr[2].push(arr[0].shift())
//     arr[0].push(arr[1].shift())
//     arr[1].push(arr[2].shift())
//   }

//   } else if (d === 'right') {

//   for (let i = 0; i < n; i++) {    
//     arr[0].unshift(arr[2].pop())
//     arr[1].unshift(arr[0].pop())
//     arr[2].unshift(arr[1].pop())
//   }

//   }

//   return arr
// }

//console.log(infiniteLoop([[1,2,3],[4,5,6],[7,8,9]],"right",1))


//test comment

// function getSum(arr) {
//   let result = 0

//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i]
//   }

//   return result
// }

// function threeInOne(arr) {
//   let resArr = []

//   for (let i = 3; i < arr.length+3; i+=3) {
//     resArr.push(getSum(arr.slice(i - 3, i)))
//   }
//   return resArr
// }

// console.log(threeInOne([1, 2, 3, 4, 5, 6, 7, 8, 9]))



function isolateIt(arr) {
  let resArray = []
  let leftPartString
  let rightPartString
  
  for (let i = 0; i < arr.length; i++) {

    let centerOfString = (arr[i].length / 2) - 1
    
    if (arr[i].length % 2 === 0) {
      
      leftPartString = arr[i].slice(0, centerOfString + 1)
      rightPartString = arr[i].slice(centerOfString + 1, arr[i].length)
      
    } else if (arr[i].length % 2 !== 0) {
      
      leftPartString = arr[i].slice(0, centerOfString + 1)
      rightPartString = arr[i].slice(centerOfString + 2, arr[i].length)
      
    }

    resArray.push(`${leftPartString}|${rightPartString}`)
  }

  return resArray
}



// console.log(isolateIt(['abcdef', 'fghklmn']))

//alternative

// function isolateIt(arr){
//   return arr.map(s=>s.slice(0,s.length/2)+"|"+s.slice(-s.length/2));
// }








let shuffleIt = (arr, ...arrays) => {
  let resArray = arr.slice();
   
  for (i = 0; i < arrays.length; i++) {

    let [first, second] = [arrays[i][0], arrays[i][1]];

    [resArray[first], resArray[second]] = [resArray[second], resArray[first]];
  
  }

return resArray;
  
}

//console.log( shuffleIt([1,2,3,4,5],[1,2],[3,4]) )


//alternative

// var shuffleIt = (arr,...ex)=>{
//   for ([a,b] of ex) [arr[a],arr[b]]=[arr[b],arr[a]];
//   return arr;
// }

//alternative

// function shuffleIt(arr,...swaps) {
//  for (swap of swaps) {
//    var [a, b] = swap;
//    [arr[a], arr[b]] = [arr[b], arr[a]];
//  }
//   return arr;
// }



function countGrade(scores) {
    
  // let FilterS = (scores) => {
  //   return scores.filter(x => x == 100);
  // }
  //почему не работает стрелочная функция?
  
  return {
    S: scores.filter(x => x == 100).length,
    A: scores.filter(x => x >= 90 && x < 100).length,
    B: scores.filter(x => x >= 80 && x < 90).length,
    C: scores.filter(x => x >= 60 && x < 80).length,
    D: scores.filter(x => x >= 0 && x < 60).length,
    X: scores.filter(x => x == -1).length,
  }
  
}


console.log(countGrade([65,75,85,85,95,100,100]))
