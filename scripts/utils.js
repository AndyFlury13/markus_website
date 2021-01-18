var menu_icon_state = 0;
var dropdown_state = 0;
var prev_width;
const MENU_TRANSITION_WIDTH = 900;

var member_dropdown_state = 0;

function to_icon() {
  $("#menu-icon").css("animation-name", "menu-fade-in");
  $("#menu-icon").css("animation-duration", ".6s");
  $("#menu-icon").css("animation-timing-function", "ease-in-out");
  $("#menu-icon").css("animation-delay", "0s");
  $("#menu-icon").css("animation-fill-mode", "forwards");
  $("#menu-icon").css("display", "inline");
  $("#menu-icon").css("cursor", "pointer");

  $("#publications").css("animation-name", "publication-slide-r");
  $("#publications").css("animation-duration", ".7s");
  $("#publications").css("animation-timing-function", "ease-in-out");
  $("#publications").css("animation-fill-mode", "forwards");
  $("#publications").css("left", "130px");
  $("#publications").css("opacity", "0");

  $("#research").css("animation-name", "research-slide-r");
  $("#research").css("animation-duration", ".7s");
  $("#research").css("animation-timing-function", "ease-in-out");
  $("#research").css("animation-fill-mode", "forwards");
  $("#research").css("left", "295px");
  $("#research").css("opacity", "0");

  $("#group").css("animation-name", "group-slide-r");
  $("#group").css("animation-duration", ".7s");
  $("#group").css("animation-timing-function", "ease-in-out");
  $("#group").css("animation-fill-mode", "forwards");
  $("#group").css("left", "432px");
  $("#group").css("opacity", "0");

  $("#teaching").css("animation-name", "teaching-fade-out");
  $("#teaching").css("animation-duration", ".7s");
  $("#teaching").css("animation-timing-function", "ease-in-out");
  $("#teaching").css("animation-fill-mode", "forwards");
  $("#teaching").css("opacity", "0");

  $("#menu-icon-div").css("z-index", "13");
}


function to_bar() {
  $("#menu-icon").css("animation-name", "menu-fade-out");
  $("#menu-icon").css("animation-duration", ".6s");
  $("#menu-icon").css("animation-timing-function", "ease-in-out");
  $("#menu-icon").css("animation-delay", "0s");
  $("#menu-icon").css("animation-fill-mode", "forwards");

  $("#publications").css("animation-name", "publication-slide-l");
  $("#publications").css("animation-duration", ".7s");
  $("#publications").css("animation-timing-function", "ease-in-out");
  $("#publications").css("animation-fill-mode", "forwards");
  $("#publications").css("left", "130px");
  $("#publications").css("opacity", "0");

  $("#research").css("animation-name", "research-slide-l");
  $("#research").css("animation-duration", ".7s");
  $("#research").css("animation-timing-function", "ease-in-out");
  $("#research").css("animation-fill-mode", "forwards");
  $("#research").css("left", "295px");
  $("#research").css("opacity", "0");

  $("#group").css("animation-name", "group-slide-l");
  $("#group").css("animation-duration", ".7s");
  $("#group").css("animation-timing-function", "ease-in-out");
  $("#group").css("animation-fill-mode", "forwards");
  $("#group").css("left", "432px");
  $("#group").css("opacity", "0");

  $("#teaching").css("animation-name", "teaching-fade-in");
  $("#teaching").css("animation-duration", ".7s");
  $("#teaching").css("animation-timing-function", "ease-in-out");
  $("#teaching").css("animation-fill-mode", "forwards");
  $("#teaching").css("opacity", "0");

  $("#menu-icon-div").css("z-index", "13");
  $("#menu-icon-div").css("top", "-55px");
  $("#menu-icon-div").css("width", "100%");
  $("#menu-icon-div").css("height", "200%");
}

$(document).ready(function(){

  //Initial width
  var width_function = function() {
      return $(window).width();
  }
  var width;
  $.when(width = width_function()).done(function() {
    if (width < MENU_TRANSITION_WIDTH) {
      prev_width = 0;
      to_icon()
    } else {
      prev_width = 1;
    }

  });


  $("#menu-icon").click(function() {
    //Rotate menu icon, create dropdown
    if (menu_icon_state == 0) {
      $(this).css("animation-name", "rotate-menu-c");
      $("#menu-small").slideDown();
      $("#menu-small").promise().done(function() {
        dropdown_state = 1;
        $(this).promise().done(function() {
          menu_icon_state = 1;
          // console.log(menu_icon_state);
          // console.log(dropdown_state);
        });
      });
    } else {
      $(this).css("animation-name", "rotate-menu-cc");
      $("#menu-small").slideUp();
      $("#menu-small").promise().done(function() {
        dropdown_state = 0;
        $(this).promise().done(function() {
          menu_icon_state = 0;
          // console.log(menu_icon_state);
          // console.log(dropdown_state);
        });
      });
    }
    $(this).css("animation-duration", ".2s");
    $(this).css("transition-timing-function", "ease-out");
    $(this).css("animation-iteration-count", "1");
    $(this).css("animation-delay", "0s");
    $(this).css("opacity", "1");
    $(this).css("transform", "rotate(0deg");
  });

  $(window).resize(function() {
    var width;
    $.when(width = width_function()).done(function() {
      if (width < MENU_TRANSITION_WIDTH) {
        if (prev_width == 1) {//Transition to to_icon
          to_icon();
          prev_width = 0;
        }
      } else {
        if (prev_width == 0) {//Transition to bar
          if (dropdown_state == 1) { //rotate menu and slide up dropdown
            $("#menu-icon").css("animation-name", "rotate-menu-c");
            $("#menu-small").slideUp();
            $("#menu-small").promise().done(function() {
              dropdown_state = 0;
              $(this).promise().done(function() {
                menu_icon_state = 0;
                // console.log(menu_icon_state);
                // console.log(dropdown_state);
              });
            });
          }

          to_bar();
          prev_width = 1;
        }
      }
    });
  });


  //Group.html
  $("#past-member-dropdown-button").click(function() {
    if (member_dropdown_state == 0) {
      $("#past-members").css("display", "inline");
      member_dropdown_state = 1;
    } else {
      $("#past-members").css("display", "none");
      member_dropdown_state = 0;
    }
  })


  $("#past-member-hide-button").click(function() {
    $("#past-members").css("display", "none");
    member_dropdown_state = 0;
  })
});
