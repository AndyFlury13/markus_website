$(document).ready(function(){

  $(".slider-button").click(function(e) {
    var id = $(this).attr("id");
    id = id[id.length-1];
    var animation = "24s autoplay" + id + " infinite ease-in-out";
    var curr_left_position = $(".image-container").css("left");
    curr_left_position = -1 * parseInt(curr_left_position.substring(0, curr_left_position[length - 2]))
    var window_width = $(document).width();
    var slide_num = Math.floor((curr_left_position / window_width)) % 6;
    var curr_percent = (slide_num * -100).toString() + "%";
    var target_percent = ((parseInt(id) - 1) * -100).toString() + "%";

    var style = document.createElement("style");
    style.type = "text/css";
    var keyFrames = "\
      @-webkit-keyframes slide-left {\
        0% { left:" + curr_percent + "} 100% {left:" + target_percent + "} }";
    style.innerHTML = keyFrames;
    document.getElementsByTagName('head')[0].appendChild(style);

    $(".image-container").css("animation-duration", "1s");
    $(".image-container").css("animation-name", "slide-left");
    $(".image-container").css("animation-timing-function", "ease-in-out");
    $(".image-container").css("animation-iteration-count", "1");
    $(".image-container").css("left", target_percent);

    setTimeout(function() {
      var animation = "24s autoplay" + id + " infinite ease-in-out";
      $(".image-container").css("animation", animation);
      }, 2000
    );

  });

});
