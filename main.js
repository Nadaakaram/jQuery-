$(document).ready(function () {
  var images = ["images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
  ];
  $("#gallery").gallery(images);
});
$.fn.gallery = function (images) {
  var currentImg = 0;

  for (var i = 0; i < images.length; i++) {
    $("#gallery").append(
      '<img src="' + images[i] + '"index="' + i + '"class="gallery-img">'
    );
  }

  $("#gallery img").click(function () {
    currentImg = Number($(this).attr("index"));
    $("#slider-img").attr("src", images[currentImg]);
    $("#slider").css("display", "flex").hide().fadeIn();
  });

  $("#nextBtn").click(function () {
    if (currentImg < images.length - 1) {
      currentImg++;
    } else {
      currentImg = 0;
    }
    $("#slider-img").attr("src", images[currentImg]);

  });

  $("#prevBtn").click(function () {
    if (currentImg >0) {
        currentImg--;
      } else {
        currentImg = images.length-1;
      }
      $("#slider-img").attr("src", images[currentImg]);
  });

  $("#closeBtn").click(function () {
    $("#slider").fadeOut();
  });
};
