$(document).ready(function () {
  const template = $("#form-template .generic-form");

  // Danh sách sản phẩm
  const productList = [
    { name: "Sản phẩm 1", price: "100.000 VND" },
    { name: "Sản phẩm 2", price: "200.000 VND" },
    { name: "Sản phẩm 3", price: "300.000 VND" },
    { name: "Sản phẩm 4", price: "100.000 VND" },
    { name: "Sản phẩm 5", price: "200.000 VND" },
    { name: "Sản phẩm 6", price: "300.000 VND" },
  ];

  // Hàm render các sản phẩm
  const renderProducts = () => {
    $("#form-container").empty(); // Xóa tất cả các form hiện tại

    // Duyệt qua danh sách sản phẩm và tạo form tương ứng
    productList.forEach((product, index) => {
      const form = template.clone(); // Sao chép form mẫu

      // Cập nhật nội dung cho các trường trong form
      form.find(".form-label-1").text("Tên sản phẩm:");
      form.find(".form-label-2").text("Giá sản phẩm:");
      form.find(".form-input-1").val(product.name);
      form.find(".form-input-2").val(product.price);

      // Xử lý sự kiện click xóa
      form.find(".delete-button").on("click", function () {
        productList.splice(index, 1); // Xóa sản phẩm khỏi danh sách
        renderProducts(); // Render lại form
      });

      // Thêm form vào container
      $("#form-container").append(form);
    });
  };

  // Gọi hàm render sản phẩm lần đầu
  renderProducts();
});
