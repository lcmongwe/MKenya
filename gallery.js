$(document).ready(function () {
  console.log("page loaded.");

  // click effect
  $(".card-button").click(function () {
    $(".card-gallery").show();
  });
  $(".card-mouseon").click(function () {
    $(".card-mygallery").show();
  });
  $(".card-button").click(function () {
    $(".card-test").hide();
  });
  $(".fa-solid").click(function () {
    $(".card-test").show();
    $(".card-gallery").hide();
  });
  $(".card-mouseon").click(function () {
    $(".card-test2").hide();
  });
  $(".fa-solid").click(function () {
    $(".card-test2").show();
    $(".card-mygallery").hide();
  });
});
