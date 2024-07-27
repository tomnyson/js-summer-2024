function initData() {
  const users = localStorage.getItem('products')
  if (!users) {
    return []
  }
  return JSON.parse(users)
}
const products = initData()
// lấy giá trị từ query string username=admin
const urlParams = new URLSearchParams(window.location.search)
const code = urlParams.get('code')
function ktProduct(code) {
  for (let i = 0; i < products.length; i++) {
    if (code == products[i].code) {
      return products[i]
    }
  }
  return null
}

const product = ktProduct(code)
if (product) {
  console.log(product)
  renderViewDetail(product)
}

function initDataUser() {
  const users = localStorage.getItem('users')
  if (!users) {
    return []
  }
  return JSON.parse(users)
}
const dsTaiKhoan = initDataUser()
// lấy giá trị từ query string username=admin
function ktUsername(username) {
  for (let i = 0; i < dsTaiKhoan.length; i++) {
    if (username == dsTaiKhoan[i].username) {
      return dsTaiKhoan[i]
    }
  }
  return null
}

function addCart(item) {
  console.log('add cart', item.code)
  const username = localStorage.getItem('currentUser')
  if (!username) {
    window.location.href = 'index.html'
  }
  const currentUser = ktUsername(username)
  if (currentUser.carts && currentUser.carts.length > 0) {
    // case 1: đã có giỏ hàng
    let newCart = currentUser.carts;
    let isCheck = false;
    
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].code === item.code) 
        { 
          newCart[i].quantity ++;
          isCheck = true;
        }
    }
    if(!isCheck) {
      newCart.push({
        ...item,
        quantity: 1,
      })
    }
    currentUser.carts = newCart

    for (let i = 0; i < dsTaiKhoan.length; i++) {
      if (username == dsTaiKhoan[i].username) {
        dsTaiKhoan[i] = currentUser
        localStorage.setItem('users', JSON.stringify(dsTaiKhoan))
        alert('sản phẩm đã add vào giỏ hàng thành công')
        return
      }
    }
    alert('thêm sản phâm khi có giỏ')
    console.log(currentUser.carts)
    return
  } else {
    // case 2: chưa có giỏ hàng
    currentUser.carts = [
      {
        ...item,
        quantity: 1,
      },
    ]
    for (let i = 0; i < dsTaiKhoan.length; i++) {
      if (username == dsTaiKhoan[i].username) {
        dsTaiKhoan[i] = currentUser
        localStorage.setItem('users', JSON.stringify(dsTaiKhoan))
        alert('sản phẩm đã add vào giỏ hàng thành công')
        return
      }
    }
  }
  /**
   * step 1: kiểm tra xem user đã đăng nhập chưa-> nếu chưa thì đẩy về login
   *
   * step 2: lấy user hiện tại -> giỏ hàng hiện tại
   * step 3: kt sự tồn tại cuả sp trong giỏ hàng
   *  nếu chưa -> thêm mới sản phẩm
   *  nếu đã có -> tăng  số lương + 1
   * step 4: lưu lại biế user
   */
}

function renderViewDetail(product) {
  elmDetail = document.getElementById('detail')
  const link = product.image || 'https://placehold.co/600x400'
  elmDetail.innerHTML = `
  <h3>${product.name}</h3>
  <img src='${link}'/>
  <p class='price'>${product.price}</p>
  <button class='btn btn-primary' onClick='addCart(${JSON.stringify(product)})'>buy now</button>
  <p>${product.description}</p>
  
 `
}
