const username =localStorage.getItem('currentUser');
if(!username) {
 window.location.href = 'index.html'
}
// localStorage.setItem('currentUser',elmusername)



function initData() {
    const users = localStorage.getItem('users')
    if (!users) {
      return []
    }
    return JSON.parse(users)
  }
const dsTaiKhoan = initData()
const currentUser = ktUsername(username)
console.log(currentUser)
const eleProducts = document.getElementById('tb_sanpham')
let result = "";
// for (const prd of dsProducts) {
//     const link = prd.image || 'https://placehold.co/600x400'
//     result+= `<tr>
//             <td>${prd.code}</td>
//             <td>${prd.name}</td>
//             <td>${prd.price}</td>
//             <td>${prd.price_import}</td>
//             <td>${prd.sale}</td>
//             <td><img width="200" src="${link}"/></td>
//             <td>${prd.description.substring(0,100)}</td>
//             <td>
//               <a href="detail.html?code=${prd.code}">
//               <button class="btn btn-primary" type="button">
//                <i class="fa fa-eye"></i>
//               </button>
//               </a>
//              <a href="edit-user.html?username=${prd.code}">
//               <button class="btn btn-primary" type="button">
//                <i class="fa fa-pen"></i>
//               </button>
//               <a>
//               <button onClick="deleteUser('${prd.code}')" class="btn btn-danger" type="button"> <i class="fa fa-trash"></i></button>
//             </td>
//         </tr>
//     `
// }

// hien thi thong tin user dang dang nhap
renderUserLogin(username)
function renderUserLogin(username) {
  elmCurrentUser = document.getElementById('currentUser')

  for (let i = 0; i < dsTaiKhoan.length; i++) {
    if (username == dsTaiKhoan[i].username ) {
      elmCurrentUser.innerHTML = `
      <p>username: ${dsTaiKhoan[i].username}<p>
      <p>password: ${dsTaiKhoan[i].password}<p>
    `
      return
    }
  }
}

const elmDangXuat = document.getElementById("btnDangXuat")
if (elmDangXuat){
  elmCurrentUser = document.getElementById('currentUser')
  elmDangXuat.addEventListener('click', function () {
    
        localStorage.removeItem('currentUser')
    
      
    
  })
}


function ktUsername(username) {
  for (let i = 0; i < dsTaiKhoan.length; i++) {
    if (username == dsTaiKhoan[i].username) {
      return dsTaiKhoan[i]
    }
  }
  return null
}
renderViewCarts()
function renderViewCarts() {
  let total = 0;
  for (const item of currentUser.carts) {
    total += item.price * item.quantity
    const link = item.image || 'https://placehold.co/600x400'
    result+= `<tr>
            <td>${item.name}</td>
             <td><img src='${link}' width="100"/></td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>
             <a href="edit-user.html?username=${item.code}">
              <button class="btn btn-primary" type="button">
               <i class="fa fa-pen"></i>
              </button>
              <a>
              <button onClick="deleteUser('${item.code}')" class="btn btn-danger" type="button"> <i class="fa fa-trash"></i></button>
            </td>
        </tr>
    `
    
    const eleCarts = document.getElementById('tb_carts')
    eleCarts.innerHTML = result
    const eleTotal = document.getElementById('total')
    eleTotal.innerHTML = `Total: ${total} vnd`
    console.log(total)
}
}
/**
 * orders: [
 *  {
   * address
   * phone
   * note
   * items: [
   * ...carts
   * ]
 * }
 * }]
 */