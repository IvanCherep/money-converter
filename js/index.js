function convert(rubles) {
  return Math.round(rubles / 63);
}

function outputResult(rubles) {
  var dollars = convert(rubles);

  $(".dollars").html(dollars + "$");
}

function init() {
  $(".rubles").keyup(function() {
    outputResult(this.value);
  });

  $(".btn").click(function() {
    var rubles = $(".rubles").val();
    outputResult(rubles);
  });
}

$(init);

//ad
