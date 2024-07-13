/**
 * 1. dinh nghia mang
 * 2. duyet mang
 */
// const arrSoNguyen = [1, 3, 4, 5, 6, 7, 8, 9, 10]
// const arrSoNguyen1 = new Array(1 ,3, 4, 5, 6, 7, 8, 9, 10)
// console.log(arrSoNguyen)
// console.log(arrSoNguyen1)

// for(let i=0; i< arrSoNguyen.length; i++) {
//   console.log(i)
// }
// for(let i in arrSoNguyen) {
//   console.log(i)
// }

// for (let i of arrSoNguyen) {
//   console.log(arrSoNguyen)
// }
// arrSoNguyen.forEach(function (item) {
//   console.log(item)
// })

 /**
   * yêu cầu nhập vào một số nếu ko phải số yêu cầu nhập lại
   * chỉ xuất ra giá trị chẵn mảng  
   * chỉ in lẻ mảng
   * in ra các số chia hết cho 3 và 5 mảng
   * tính tổng của mảng
   * tinh trung bình công mảng
   * in ra số chính phương mảng
   * in ra số nguyên tố mảng
   * * in ra số hoàn hảo mảng
   * nhập vào 2 số a và b in ra giá trị trong khoảng [a,b]
   * đếm số phần tử chẵn trong mảng
   * đếm số phần tử lẻ trong mảng hay không
   * sắp xếp tăng dần
   * sắp xếp giảm dần
   */
 const mangNgauNhien = [...Array(100).keys()].map(i => Math.floor(Math.random() * 100) + 1);
 function isChan(n) {
    return n % 2 == 0
 }
 // cau 1
 function cau1() {
  for(let i = 0; i < mangNgauNhien.length; i++) {
    // cau 1
   if(isChan(mangNgauNhien[i])){
     console.log(`gía trị: ${mangNgauNhien[i]}`)
   }
}
 }

 function cau2() {
  for(let i = 0; i < mangNgauNhien.length; i++) {
    // cau 1
   if(!isChan(mangNgauNhien[i])){
     console.log(`gía trị: ${mangNgauNhien[i]}`)
   }
}
 }

//  cau1()
//  cau2()
//in ra các số chia hết cho 3 và 5 mảng
function cau3() {
for(let i = 0; i < mangNgauNhien.length; i ++) {
  if(mangNgauNhien[i] % 3 == 0 && mangNgauNhien[i] % 5 == 0 ) {
    console.log(`gia tri: ${mangNgauNhien[i]}`)
  }
}
} 
// cau3();
//tính tổng của mảng
function cau4() {
  tong = 0;
  for(let i = 0; i< mangNgauNhien.length;i++) {
     tong += mangNgauNhien[i]
  }
  console.log(`gia tri sum: ${tong}`)
}
// cau4();

function cau5() {
  average = 0;
  for (aNum of mangNgauNhien) {
    average += aNum;
  }
  console.log(`gia tri trung binh cong: ${average/mangNgauNhien.length}`)
}
// cau5();
function isSoHoanHao(x){
  let sum=0;
  for(let i=1;i<x;i++){
    if(x%i==0)
      sum+=i;
  }
  if(x==sum)return true;
  else false;
}
function cau6(){
  console.log("Số hoàn hảo")
  for(item of mangNgauNhien)
  {
    if(isSoHoanHao(item))
      console.log(item)
  }
}
cau6();

function isSoChinhPhuong(n){
  return Number.isInteger(Math.sqrt(n))
}
for(let i=0; i < mangNgauNhien.length; i++){
  if(isSoChinhPhuong(mangNgauNhien[i])){
    console.log(`${mangNgauNhien[i]}`)
  }
}
