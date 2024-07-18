const checkuser =localStorage.getItem('currentUser');
if(!checkuser) {
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
const elmTbUsers = document.getElementById('tb_users')
let result = "";
for (const user of dsTaiKhoan) {
    result+= `<tr>
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>
              <button class="btn btn-primary" type="button">
              <i class="fa fa-pen"></i>
              </button>
              <button onClick="deleteUser('${user.username}')" class="btn btn-danger" type="button"> <i class="fa fa-trash"></i></button>
            </td>
        </tr>
    `
}
elmTbUsers.innerHTML = result
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
              <i class="fa fa-pen"></i>
              </button>
              <button onClick="deleteUser('${user.username}')" class="btn btn-danger" type="button"> <i class="fa fa-trash"></i></button>
            </td>
        </tr>
    `
  
}
elmTbUsers.innerHTML = result
localStorage.setItem("users", JSON.stringify(newListUser))
}

