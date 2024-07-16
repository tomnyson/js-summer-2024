/**
 * khai bao object
 */

//

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

// function xuatThongTin(sv) {
//   console.log('---------')
//   console.log(`username: ${sv.username}`)
//   console.log(`password: ${sv.password}`)
// }
// duyệt mảng
// for(let i=0; i<dsTaiKhoan.length; i++) {
//   xuatThongTin(dsTaiKhoan[i]);
// }
// for(const sv in dsTaiKhoan) {
//   console.log(dsTaiKhoan[sv])
// }

// for(const sv of dsTaiKhoan) {
//   console.log(sv)
// }
// xây dựng chức năng đăng nhập -> username, password kt hợp lệ
const dsTaiKhoan = initData()

console.log('================================')
const elmBtnLogin = document.getElementById('btnsubmit')
if (elmBtnLogin) {
  elmBtnLogin.addEventListener('click', function () {
    const elmusername = document.getElementById('username').value
    const elmpass = document.getElementById('pwd').value

    if (elmusername == '' || elmpass == '') {
      alert('Tài khoản và mật khẩu ko đc để trống')
      return
    }

    for (let i = 0; i < dsTaiKhoan.length; i++) {
      if (elmusername == dsTaiKhoan[i].username && elmpass == dsTaiKhoan[i].password) {
        alert('Đăng nhập thành công')
        localStorage.setItem('currentUser',elmusername)
        window.location.href = 'admin.html'
        return
      }
    }
    alert('tài khoản or mật khẩu không đúng')
    return

    // console.log(elmusername)
    // console.log(elmpass)
  })
}
// xu ly dang ky
const eleDangKi = document.getElementById('btnRegister')
if (eleDangKi) {
  eleDangKi.addEventListener('click', function () {
    alert('dang ky')
    const elmusername = document.getElementById('username').value
    const elmpass = document.getElementById('pwd').value

    if (elmusername == '' || elmpass == '') {
      alert('Tài khoản và mật khẩu ko đc để trống')
      return
    }

    for (let i = 0; i < dsTaiKhoan.length; i++) {
      if (elmusername == dsTaiKhoan[i].username) {
        alert('Tài khoản đã tồn tại')
        return
      }
    }
    const newtk = {
      username: elmusername,
      password: elmpass,
    }
    dsTaiKhoan.push(newtk)
    // lưu giữ liệu vào localstorage
    localStorage.setItem("users", JSON.stringify(dsTaiKhoan))
    for (let i = 0; i < dsTaiKhoan.length; i++) {
      console.log(dsTaiKhoan[i])
    }
    return

    // console.log(elmusername)
    // console.log(elmpass)
  })
}

function initData() {
  const users = localStorage.getItem('users')
  if (!users) {
    localStorage.setItem(
      'users',
      JSON.stringify([
        {
          username: 'admin',
          password: '123456',
        },
      ]),
    )
    return [
      {
        username: 'admin',
        password: '123456',
      },
    ]
  }
  return JSON.parse(users)
}
//currentLogin
