$(".director-message__toggle").on("click", function () {
  $(this).toggleClass("director-message__toggle_toggle");

  if ($(this).hasClass("director-message__toggle_toggle")) {
    $(this).text("Закрыть");
    $(".director-message__hidden").slideDown(300);
  } else {
    $(this).text("Раскрыть");
    $(".director-message__hidden").slideUp(300);
  }
});