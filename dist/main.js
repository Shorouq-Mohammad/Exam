const source = $('#change-template').html();
const template = Handlebars.compile(source)
const newHTML = template({change: "change"});
$('.change').append(newHTML);