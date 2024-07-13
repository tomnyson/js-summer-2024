/**
 * khai bao object
 */

const sinhvien = {
  mssv: 'pk12345',
  ten: 'Nguyen Van A',
  gioiTinh: 'Nam',
  dtb: 8.6
}

// const sinhvien1 = new Object()
// sinhvien1.mssv = 'pk12346'
// sinhvien1.ten = 'Nguyen Van B',
// sinhvien1.gioiTinh = 'Nữ',
// sinhvien1.dtb = 7.5


// sinhvien.dtb = 9;
// console.log(sinhvien)
// console.log(sinhvien1)
/**
 * (4) ['mssv', 'ten', 'gioiTinh', 'dtb']
 * 0: "mssv"1: "ten"2: "gioiTinh"3: "dtb"length: 4[[Prototype]]: Array(0)
script.js:26 
 * 
 */
// console.log(Object.keys(sinhvien));
// console.log(Object.values(sinhvien));

// console.log(sinhvien.ten);

const dsTaiKhoan = [
  {
    username: 'admin',
    password: '123456'
  },
  {
    username: 'user',
    password: '123456'
  }
]
function xuatThongTin(sv) {
  console.log("---------")
  console.log(`username: ${sv.username}`)
  console.log(`password: ${sv.password}`)
}
// duyệt mảng
for(let i=0; i<dsTaiKhoan.length; i++) {
  xuatThongTin(dsTaiKhoan[i]);
}
for(const sv in dsTaiKhoan) {
  console.log(dsTaiKhoan[sv])
}

for(const sv of dsTaiKhoan) {
  console.log(sv)
}
// xây dựng chức năng đăng nhập -> username, password kt hợp lệ

function login(username, password) {
  
}