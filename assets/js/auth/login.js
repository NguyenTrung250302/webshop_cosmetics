$(function () {
  // Thông tin đăng nhập mặc định
  const users = [
    { username: "admin", password: "admin", role: "admin" },
    { username: "user", password: "user", role: "user" },
  ];

  // Khi nhấn vào "Đăng nhập"
  $("#login-button").click(function (e) {
    e.preventDefault(); // Ngừng hành động mặc định

    const username = $("#username").val(); // Lấy giá trị từ ô username
    const password = $("#password").val(); // Lấy giá trị từ ô password

    // Kiểm tra thông tin đăng nhập
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      alert(`Đăng nhập thành công với vai trò: ${user.role}`);
      if (user.role === "admin") {
        window.location.href = "/assets/views/admin/admin.html"; // Điều hướng tới màn admin
      } else if (user.role === "user") {
        window.location.href = "/assets/views/pages/user.html"; // Điều hướng tới màn user
      }
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  });

  // Khi nhấn vào "Quên mật khẩu"
  $("a[href='']").click(function (e) {
    e.preventDefault(); // Ngừng hành động mặc định
    $("#container_form_login").hide(); // Ẩn form đăng nhập
    $("#container_form_forgot_password").show(); // Hiện form quên mật khẩu
  });

  // Khi nhấn vào "Quay lại đăng nhập"
  $("#back-to-login").click(function (e) {
    e.preventDefault(); // Ngừng hành động mặc định
    $("#container_form_forgot_password").hide(); // Ẩn form quên mật khẩu
    $("#container_form_login").show(); // Hiện form đăng nhập
  });
});
