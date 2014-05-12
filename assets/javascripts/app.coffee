delay = (ms, func) -> setTimeout func, ms

$ ->
  $(".logo-container").transition
    marginTop: "50px", opacity: "1"
    4000
    'ease-in-out'

  delay 3000, ->
    $(".hexagons").transition
      opacity: "1"
      500
      'ease-in-out'

  delay 6000, ->
    $(".name-container").transition
      opacity: "1"
      1500
      'ease-in-out'

  delay 500, ->
    $(".letter--1").transition
      "-webkit-transform": "rotateY(0deg)"
      8000
      'ease-out'

  delay 1000, ->
    $(".letter--2").transition
      "-webkit-transform": "rotateY(0deg)"
      8000
      'ease-out'

  delay 1500, ->
    $(".letter--3").transition
      "-webkit-transform": "rotateY(0deg)"
      8000
      'ease-out'

  delay 2000, ->
    $(".letter--4").transition
      "-webkit-transform": "rotateY(0deg)"
      8000
      'ease-out'