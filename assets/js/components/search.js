$(document).ready(function () {
  // fill data api vào đây, xong dùng hàm check input so dánh data với dữ liệu nhập vào rồi show ra kết quả tương ứng
  $("#search-button").click(function () {
    var query = $("#search-input").val();
    if (query) {
      // Thực hiện hành động tìm kiếm, ví dụ gửi query tới server
      alert("Đang tìm kiếm: " + query);
    } else {
      alert("Vui lòng nhập từ khóa tìm kiếm.");
    }
  });

  // Tùy chọn: Xử lý tìm kiếm khi nhấn Enter
  $("#search-input").keypress(function (event) {
    if (event.which === 13) {
      // Kiểm tra phím Enter
      $("#search-button").click();
    }
  });
});
