// /**
//  * for
//  * 0 -> 100
//  */
// console.log('==== for =====')
// for (let i = 0; i <= 100; i++) {
//   console.log(i)
// }
// let j = 0
// console.log('==== while =====')
// while (j < 100) {
//   console.log(j)
//   j++
// }

// console.log('==== do while =====')

// let k = 0
// do {
//   console.log(k)
//   k++
// } while (k < 100)

// /**
//       cho day so 0 -> 100
//       in ra các giá trị lẻ
//       in ra các giá trị lẻ và chia hết cho 5
//       in ra các giá trị là số chính phương
//       in ra các giá trị là số nguyên tố
//       in ra tổng các số chia hết cho 2 và 4
//       in ra trung bình cộng các số chia hết cho 2 và 4
//    */
// console.log('in ra các giá trị lẻ')
// function isKTChan(x) {
//   if (x % 2 != 0) {
//     return false
//   }
//   return true
// }

// for (let i = 0; i <= 100; i++) {
//   // if (i % 2 != 0) {
//   //   console.log(i)
//   // }
//   if (!isKTChan(i)) {
//     console.log(i)
//   }
// }

console.log("in ra các số chính phương")
function isSoChinhPhuong(x){
  // for(let a = 1; a*a <= x; a++){
  //   if(x == a*a){
  //     return true
  //   }
  // }
  // return false
  return Math.sqrt(x) % 1 == 0
}

for(let i=0;i<=100;i++)
{
  if(isSoChinhPhuong(i))
    {
      console.log(i);
    }
}
console.log("so nguyen to ne")
function songuyento(snt){
  if(snt <= 1) return false;
    for(let i =2; i <= Math.sqrt(snt); i++){
      if(snt % i == 0){
        return false;
      }
    }
    return true;
}

for(let i =2; i<=100; i++){
  if(songuyento(i)){
    console.log(i);
  }
}