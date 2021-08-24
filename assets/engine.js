$(document).ready(function () {
  var bom = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  var a = start();

  function start() {
    let random = Math.random() + 0.1;
    let giveFor = Math.floor(random * bom.length);
    return giveFor;
  }

  $(".kotak").on("click", function () {
    var id = $(this).attr("id");

    if (id == a) {
      $("#canvas").html("<img src='assets/img/" + a + ".jpg' width='100%'>");
      $("#score").removeClass("d-none");
      $("#score").html("<h3>Kasian kamu kalah</h3><button class='btn btn-danger' id='replay'>Coba Lagi</button>");
      var audio = new Audio("assets/kalah.mp3");
      audio.play();
    } else {
      $(this).removeClass("bg-dark");
      $(this).html("");
      bom.splice(bom.indexOf(id), 1);

      if (bom.length == 1) {
        $("#canvas").html("<img src='assets/img/piala.jpg' width='100%'>");
        $("#score").removeClass("d-none");
        $("#score").html("<h3>Kamu dapat piala</h3><button class='btn btn-danger' id='replay'>Main lagi</button>");
        var win = new Audio("assets/menang.mp3");
        win.play();
        clap.play();
      }
    }

    $("#score").on("click", "#replay", function () {
      location.reload();
    });
  });
});
