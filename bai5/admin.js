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
        </tr>
    `
}
elmTbUsers.innerHTML = result
