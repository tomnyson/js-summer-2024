const checkuser = localStorage.getItem('currentUser')
if (!checkuser) {
  window.location.href = 'index.html'
}

function initData() {
  const users = localStorage.getItem('users')
  if (!users) {
    return []
  }
  return JSON.parse(users)
}
const dsTaiKhoan = initData()
// lấy giá trị từ query string username=admin
const urlParams = new URLSearchParams(window.location.search)
const username = urlParams.get('username')
function ktUsername(username) {
  for (let i = 0; i < dsTaiKhoan.length; i++) {
    if (username == dsTaiKhoan[i].username) {
      return dsTaiKhoan[i]
    }
  }
  return null
}

const editUser = ktUsername(username)
if (!editUser) {
  alert('username không hợp lệ')
  window.location.href = 'admin.html'
}

function renderValueToForm(user) {
  /**
   * get id của form
   * set value cho form chính bằng value user
   */
  const txt_user = document.getElementById('username')
  txt_user.value = user.username
  const txt_password = document.getElementById('pwd')
  txt_password.value = user.password
  const txt_name = document.getElementById('name')
  if (user.name) {
    txt_name.value = user.name
  }

  if (user.email) {
    const txt_email = document.getElementById('email')
    txt_email.value = user.email
  }

  if (user.role == 'admin') {
    const ckAdmin = document.getElementById('chkAdmin')
    const ckUser = document.getElementById('chkUser')
    ckAdmin.checked = true
    ckUser.checked = false
  } else {
    const ckAdmin = document.getElementById('chkAdmin')
    const ckUser = document.getElementById('chkUser')
    ckAdmin.checked = false
    ckUser.checked = true
  }
}

renderValueToForm(editUser)

/**
 * nhấn cập nhật user */
const elmUpdate = document.getElementById('btnUpdate')
if (elmUpdate) {
  elmUpdate.addEventListener('click', function () {
    const username = document.getElementById('username').value
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const pass = document.getElementById('pwd').value
    let role = document.getElementById('chkAdmin').checked
    if (role) {
      role = 'admin'
    } else {
      role = 'user'
    }

    if (username == '' || name == '' || email == '' || pass == '') {
      alert('filed không để trống')
      return
    }
    const updateUser = {
      username: username,
      name: name,
      email: email,
      password: pass,
      role: role,
    }
    for (let i = 0; i < dsTaiKhoan.length; i++) {
      if (username == dsTaiKhoan[i].username) {
        dsTaiKhoan[i] = updateUser
        localStorage.setItem('users', JSON.stringify(dsTaiKhoan))
        alert('cập nhật thành công')
        return
      }
    }
  })
}
