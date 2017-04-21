console.log('src');


  var max = 0;
$(document).ready(onReady);


function onReady(){
  console.log('onReady');

  $('#start').on('click', StartGame);

  $('#submit').on('click', checkNumbers);

}

function StartGame() {
  confirm('Pick your poison');
  $('.modeButtons').on('click', generateNum);
}

function generateNum() {
  var selectedMode = $(this).data('range');
  console.log(selectedMode);
  switch (selectedMode) {
    case "easy":
      max += 20;
      break;
    case "medium":
      max += 50;
      break;
    case  "hard":
      max += 100;
      break;

  }

// module.exports = max;
return max;
}

function checkNumbers(){
    var objectToSend = {
      maxValue: max,
      first: $('#player1').val(),
      second: $('#player2').val(),
      third: $('#player3').val(),
      fourth: $('#player4').val()



  };
console.log(objectToSend);

$.ajax({
type: 'POST',
url: '/addingNumbers',
data: objectToSend,
success: function(response){
  console.log('server response', response);
}

});
}
