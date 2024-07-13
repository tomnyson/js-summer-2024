/**
 *  nhập vào một số kiểm tra số đó chẵn hay lẻ
 */

let so = 10
if (so % 2 == 0) {
  console.log('Số vừa nhập là số chẵn')
} else {
  console.log('số  vừa nhập là số lẻ')
}
/**
 * nhập vào giới tính và tuổi kiểm tra xem đủ tuổi kết hôn chưa?
 */

let gioitinh
let tuoi
if ((gioitinh == 'Nam' && tuoi >= 20) || (gioitinh == 'Nữ' && tuoi >= 18)) {
  console.log('đủ điều kiện kết hôn')
} else {
  console.log('chưa đủ điều kiện kết hôn)')
}
/**
 * xếp loại sinh viên fpt
 * xuất sắc >=9, giỏi >=9, khá >=6.5 , trung binh >=5, yếu >=3.5, kém <3.5
 */
/**
 * diem >=5 dau, rot diem [0-10]
 */
const elmBtnXepLoai = document.getElementById('btnXepLoai')
elmBtnXepLoai.addEventListener('click', function () {
  const elmSoThu1 = document.getElementById('txtSoThu1').value
  const elmKetQua = document.getElementById('txtKetQua')
  let ketqua = ''
  if (isNaN(elmSoThu1) || elmSoThu1 > 10 || elmSoThu1 < 0) {
    ketqua = 'Khong hop le'
  } else {
    if (elmSoThu1 >= 5) {
          ketqua = 'Dau'
    } 
    else {
      ketqua = 'Rot'
    }
  }
  elmKetQua.innerHTML = ketqua
})

const elmBtnCong = document.getElementById('btnCong')
elmBtnCong.addEventListener('click', function () {
  const elmSoThu1 = parseFloat(document.getElementById('txtSoThu1').value)
  const elmSoThu2 = parseFloat(document.getElementById('txtSoThu2').value)
  const elmKetQua = document.getElementById('txtKetQua')
   ketqua = elmSoThu1 + elmSoThu2;
  elmKetQua.innerHTML = ketqua
})
