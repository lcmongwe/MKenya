// gallery section begins here
// parallax scroll blur effect

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  $(".parallax-zoom-blur img").css({
    width: 100 + scroll / 5 + "+",
    top: -(scroll / 10) + "%",
    "-webkit-filter": "blur(" + scroll / 100 + "px)",
    filter: "blur(" + scroll / 100 + "px)",
  });
});

// show and hide section
$(document).ready(function () {
  $("#show1").click(function () {
    $("#hidecont1").show();
  });
  $("#hidecont1").click(function () {
    $("#hidecont1").hide();
  });
});

$(document).ready(function () {
  $("#show2").click(function () {
    $("#hidecont").show();
  });
  $("#hidecont").click(function () {
    $("#hidecont").hide();
  });
});

// contact section begins here

function msg() {
  var name = document.getElementById("name").value;

  const output = document.getElementById("message");

  output.innerHTML = "Hey! thank  you for your feedback" + " " + name;
}
