
/**
 * write
 */

// localStorage.setItem("username", "admin");
// localStorage.setItem("username1", "admin");

// console.log(localStorage.getItem("username1"));
// xoa theo tung key
// localStorage.removeItem("username");
// xoa toan bo
// localStorage.clear();

const dsTaiKhoan = [
    {
      username: 'admin',
      password: '123456',
    },
    {
      username: 'user',
      password: '123456',
    },
    {
      username: 'newuser',
      password: '123456',
    },
  ]

  const dsTaiKhoanString = JSON.stringify(dsTaiKhoan)
  console.log(dsTaiKhoanString)
  console.log(JSON.parse(dsTaiKhoanString))
  /**
   * viet 1 ham luu ds tai khoan
   * viet 1 ham doc danh sach tai khoan ve ban dau
   */