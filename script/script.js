// Adding text and image to page
$(".name").text("Saul Sallah");
$("#me").attr("src", "./media/saul_.jpg");
$("#titles").text("Full Stack Web Developer");
$("#head").text("Portfolio");
$("#about").text("About");

// if screen is larger than phone, do the globe animation
if ($(window).height() > 750) {
myMove();
}

// Function to animate globe and have it slide in to view
function myMove() {
    var videoMove = document.getElementById("myVideo"); 
    var pos = 0;
    var half = Math.round($(window).height() * .5)
    
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == half) {
        clearInterval(id);
      } else {
        console.log(half);
        pos++;
        videoMove.style.top = pos + 'px';
        videoMove.style.left = pos + .75*'px';
      }
    }
  }
