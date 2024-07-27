const checkuser =localStorage.getItem('currentUser');
if(!checkuser) {
 window.location.href = 'index.html'
}
// localStorage.setItem('currentUser',elmusername)



function initData() {
    const products = localStorage.getItem('products')
    if (!products) {
      return []
    }
    return JSON.parse(products)
  }
const dsProducts = initData()
const eleProducts = document.getElementById('tb_sanpham')
let result = "";
for (const prd of dsProducts) {
    const link = prd.image || 'https://placehold.co/600x400'
    result+= `<tr>
            <td>${prd.code}</td>
            <td>${prd.name}</td>
            <td>${prd.price}</td>
            <td>${prd.price_import}</td>
            <td>${prd.sale}</td>
            <td><img width="200" src="${link}"/></td>
            <td>${prd.description.substring(0,100)}</td>
            <td>
              <a href="detail.html?code=${prd.code}">
              <button class="btn btn-primary" type="button">
               <i class="fa fa-eye"></i>
              </button>
              </a>
             <a href="edit-user.html?username=${prd.code}">
              <button class="btn btn-primary" type="button">
               <i class="fa fa-pen"></i>
              </button>
              <a>
              <button onClick="deleteUser('${prd.code}')" class="btn btn-danger" type="button"> <i class="fa fa-trash"></i></button>
            </td>
        </tr>
    `
}
eleProducts.innerHTML = result
// hien thi thong tin user dang dang nhap
renderUserLogin(checkuser)
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

function deleteUser(username) {
  /**
   * 
   */
  function ktTaoKhoan(user) {
    console.log('delete user',user)
    return user.username !== username;
  }
  console.log("dsTaiKhoan",dsTaiKhoan)
  const newListUser = dsTaiKhoan.filter(ktTaoKhoan)
  console.log('newListUser',newListUser)
  alert("đã xóa thành công")
  const elmTbUsers = document.getElementById('tb_users')
let result = "";
for (const user of newListUser) {
    result+= `<tr>
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>
              <button class="btn btn-primary" type="button">
              <a href="edit-user.html"> <i class="fa fa-pen"></i><a>
             
              </button>
              <button onClick="deleteUser('${user.username}')" class="btn btn-danger" type="button"> <i class="fa fa-trash"></i></button>
            </td>
        </tr>
    `

}
elmTbUsers.innerHTML = result
localStorage.setItem("users", JSON.stringify(newListUser))
}

