
var $form = $('form#test-form'),
url = 'https://script.google.com/macros/s/AKfycbzCakLZCwS5M4Xrh8WmRXZe-bPyn-M9ru3cmYa93Cwdn8HoBHg/exec'

$('#submit-form').on('click', function(e) {
e.preventDefault();
var jqxhr = $.ajax({
url: url,
method: "GET",
dataType: "json",
data: $form.serializeObject()
}).success(
// do something
);
})
