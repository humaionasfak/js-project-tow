$("document").ready(function () {
  var maxField = 10;
  var wrapper = $(".container");
  var btn1 = $(".btn1");
  var tow = $(".tow");
  var x = 1;

  $(btn1).click(function (e) {
    e.preventDefault();
    if (x < maxField) {
      $(tow).append(
        '<div class="toto"><input type="text"><i class="fa-solid fa-x alt"></i></div>'
      );
      x++;
    }
  });
  $(tow).on("click", ".alt", function (e) {
    e.preventDefault();
    $(this).parent("div").remove();
    x--;
  });
});
