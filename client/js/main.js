// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

$('#search-submit').on('click', function (e) {
  e.preventDefault();;
  var toTranslate = $('#pirate-speak').val().toLowerCase().trim();
  var output;
  $.get('/pirate/'+ toTranslate, function(data){
    output = data;
    console.log(data)

  });
      update();
  // not working...
  // console.log(data);
  $('#pirateification').append(output);
});

function update(data) {
  $('#pirateification').append(output);
  console.log(data);
}
