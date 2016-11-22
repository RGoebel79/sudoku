//elements that are pre filled are hidden and disabled: 
$("#br2c2").display = "none";
$("#br3c3").display = "none";

$("#r2c2").hide()
$("#r1c1").hide()

$(".enter").hide();
//class removed to stop clear button from clearing data
$("#r1c1").removeClass("tInput");
$("#r2c2").removeClass("tInput");

//checks if soultion is correct:
function checkResults() {

  var result = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6]
  ];

  // iterate through rows
  for (var i = 0; i < result.length; i++) {
    // iterate through colums
    for (var j = 0; j < result[i].length; j++) {

      var current = document.getElementById("r" + i + "c" + j).value;

      // returns false if current number doesn't match result
      if (current != result[i][j]) {
        alert("Fail at Row " + i + " Column " + j);

        return false;
      }
    }
  }
  alert("Completed");
  return true;
} // checkResults


$(".enter2").click(function() {
  //check if solution is correct when submit button is pressed
  checkResults();
});

$(".clear").click(function() {
  //Clear all numbers from board. Pre-filled numbers have .removeClass at top of script so thier value isn't erased
  $('.tInput').val("");
});