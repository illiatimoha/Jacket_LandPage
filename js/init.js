$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    var t = $(this).attr("href"),
      n = $(t).offset().top;
    return (
      jQuery("html:not(:animated), body:not(:animated)").animate(
        { scrollTop: n },
        600
      ),
      !1
    );
  }),
    $(".product_list a.button-m").on("click", function () {
      var t = $(this).closest("li").find("h4").text();
      $('input[name="comment"]').val(t);
    });
});
