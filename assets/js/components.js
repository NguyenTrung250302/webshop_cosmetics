$(document).ready(function () {
  // Hàm tải component nếu chưa được tải
  function loadComponent(selector, url) {
    if ($(selector).children().length === 0) {
      $(selector).load(url);
    }
  }

  // Tải các component
  // top banner
  loadComponent("#top_banner", "/assets/views/components/top_banner.html");
  // header menu
  loadComponent("#header_menu", "/assets/views/components/header_menu.html");
  // danh mục
  loadComponent("#categories", "/assets/views/components/categories.html");
  // footer
  loadComponent("#footer", "/assets/views/components/footer.html");

  // component feature
  loadComponent("#slider", "/assets/views/components/feature/slider.html");
  loadComponent("#search", "/assets/views/components/feature/search.html");
  loadComponent(
    "#right_menu_header",
    "/assets/views/components/feature/right_menu_header.html"
  );
  loadComponent(
    "#login_gg_fb",
    "/assets/views/components/feature/login_gg_fb.html"
  );
});
