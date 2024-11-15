$(document).ready(function () {
  const $body = $("body");
  const $naviSidebar = $(".navi-sidebar");
  const $naviToggleIcon = $(".navi-toggle-icon");
  const $naviToggleSwitch = $(".navi-toggle-switch");
  const $naviModeText = $(".navi-mode-text");

  $naviToggleIcon.on("click", function () {
    $naviSidebar.toggleClass("navi-close");
  });

  $naviToggleSwitch.on("click", function () {
    $body.toggleClass("dark");

    if ($body.hasClass("dark")) {
      $naviModeText.text("Light Mode");
    } else {
      $naviModeText.text("Dark Mode");
    }
  });
});
