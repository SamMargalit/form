(function() {
  var delay;

  delay = function(ms, func) {
    return setTimeout(func, ms);
  };

  $(function() {
    $(".logo-container").transition({
      marginTop: "50px",
      opacity: "1"
    }, 4000, 'ease-in-out');
    delay(3000, function() {
      return $(".hexagons").transition({
        opacity: "1"
      }, 500, 'ease-in-out');
    });
    delay(6000, function() {
      return $(".name-container").transition({
        opacity: "1"
      }, 1500, 'ease-in-out');
    });
    delay(500, function() {
      return $(".letter--1").transition({
        "-webkit-transform": "rotateY(0deg)"
      }, 8000, 'ease-out');
    });
    delay(1000, function() {
      return $(".letter--2").transition({
        "-webkit-transform": "rotateY(0deg)"
      }, 8000, 'ease-out');
    });
    delay(1500, function() {
      return $(".letter--3").transition({
        "-webkit-transform": "rotateY(0deg)"
      }, 8000, 'ease-out');
    });
    return delay(2000, function() {
      return $(".letter--4").transition({
        "-webkit-transform": "rotateY(0deg)"
      }, 8000, 'ease-out');
    });
  });

}).call(this);
