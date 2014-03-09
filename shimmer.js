
//Define shimmer function
function shimmer(elem) {
  
  //Define variables
  const time = 1000;
  var left = 0;
  var right = 0;
  const iterations = 100;
  var count = 0;
  const maxWidthOfShimmer = 20;
  var textColor = window.getComputedStyle(elem).backgroundColor;

  //Check if webkitBackgroundClip is supported
  if (inner.style.webkitBackgroundClip === undefined) {
    console.warn("Sorry, this is not supported in your browser yet");
    return;
  }
  //Apply styling
  inner.style.webkitBackgroundClip = "text";
  inner.style.color = "transparent";

  //Define setInterval to regularly update background within 'time' in 'iterations'
  var sInterval = setInterval(function() {
    count ++;
    
    //For first half iterations, update only right side of the gradient
    if (count <= iterations) {
      right = ((count / iterations ) * (100 + maxWidthOfShimmer));
      left = right - maxWidthOfShimmer;
            
      //Set limits of left and right
      if (left < 2) {
        left = 2;
      }

      if (right > 98) {
        right = 98;
      }
      
      //Set the gradient color according to the calculations
      elem.style.backgroundImage = "-webkit-gradient(linear, left top, right top, color-stop(0%," + textColor + "), color-stop(" + (left - 2) + "%," + textColor + "), color-stop(" + left + "%,#FFF), color-stop(" + right + "%,#FFF), color-stop(" + (right + 2) + "%," + textColor + "), color-stop(100%," + textColor + "))";
    }
    
    //After all iterations, update background back to original
    if (count > iterations) {
      inner.style.backgroundImage = "";
      clearInterval(sInterval);
    }
  }, (time / iterations));
}