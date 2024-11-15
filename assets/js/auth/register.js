$(document).ready(function () {
  // Xử lý khi form được submit
  $("#register-form").submit(function (event) {
    event.preventDefault(); // Ngừng hành động mặc định của form (reload trang)

    // Lấy dữ liệu từ các trường input
    var username = $("#username").val();
    var username = $("#fulname").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var confirmPassword = $("#confirm-password").val();

    // Kiểm tra tính hợp lệ của dữ liệu
    if (
      username === "" ||
      fullname === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return; // Dừng lại nếu có trường trống
    }

    // Kiểm tra nếu mật khẩu và xác nhận mật khẩu trùng khớp
    if (password !== confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp!");
      return;
    }

    // Kiểm tra định dạng email (có thể cải tiến thêm tùy vào yêu cầu)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Email không hợp lệ!");
      return;
    }

    // Nếu tất cả hợp lệ
    alert("Thông tin hợp lệ, bạn có thể đăng ký!");
  });
});
