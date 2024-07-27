const checkuser = localStorage.getItem('currentUser')
if (!checkuser) {
  window.location.href = 'index.html'
}

function initData() {
  const products = localStorage.getItem('products')
  if (!products) {
    return []
  }
  return JSON.parse(products)
}
const products = initData()
console.log(products)
function ktUsername(username) {
  for (let i = 0; i < dsTaiKhoan.length; i++) {
    if (username == dsTaiKhoan[i].username) {
      return dsTaiKhoan[i]
    }
  }
  return null
}

/**
 * nhấn cập nhật user */
const btnCreate = document.getElementById('btnCreate')
if (btnCreate) {
  btnCreate.addEventListener('click', function () {
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const price_import = document.getElementById('price_import').value
    const sale = document.getElementById('sale').value
    const image = document.getElementById('image').value
    const description = document.getElementById('description').value

    if (name == '' || price == '' || price_import == '') {
      alert('filed không để trống')
      return
    }
    if(sale>=100){
      alert('khong lon hon 100')
      return
    }
    if(price_import > price){
      alert('khong de lon hon ')
    }

    const newProduct = {
      code: `SP_${products.length+ 1}`,
      name: name,
      price: Number(price),
      price_import: Number(price_import),
      sale: Number(sale),
      image,
      description
    }
    products.push(newProduct)
    localStorage.setItem('products', JSON.stringify(products))
    alert('create product success')
  })
}

function renderValueToForm(products) {
  /**
   * get id của form
   * set value cho form chính bằng value user
   */
  const name = document.getElementById('name')
  name.value= products.name
  const price_import = document.getElementById('price_import')
  price_import.value= products.password
  const txt_name = document.getElementById('name')
  if(user.name) {
    txt_name.value=user.name
  }

  if(user.email)
    {
      const txt_email = document.getElementById('email')
      txt_email.value=user.email
    }   
   
  if(user.role=="admin")
  {
    const ckAdmin = document.getElementById('chkAdmin')
    const ckUser = document.getElementById('chkUser')
    ckAdmin.checked=true;
    ckUser.checked=false;
  }
  else
  {
    const ckAdmin = document.getElementById('chkAdmin')
    const ckUser = document.getElementById('chkUser')
    ckAdmin.checked=false;
    ckUser.checked=true;
  }
  
}
renderValueToForm(editUser) 
