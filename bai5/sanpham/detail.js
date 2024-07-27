
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
if(product){
  renderViewDetail(product)
}
function renderViewDetail(product) {
 elmDetail =  document.getElementById('detail')
 const link = product.image || 'https://placehold.co/600x400'
 elmDetail.innerHTML = `
  <h3>${product.name}</h3>
  <img src='${link}'/>
  <p class='price'>${product.price}</p>
  <p>${product.description}</p>
 `
}

