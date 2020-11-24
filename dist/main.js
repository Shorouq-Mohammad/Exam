const render = function(recipes){
    const source = $('#recipes-template').html();
    const template = Handlebars.compile(source)
    const newHTML = template({recipes});
    $('#recipes').append(newHTML);
}
const search = function(){
    const ingredient = $("#recipeInput").val()
    $.get(`/recipes/${ingredient}`, function(response){
        render(response)
    })
}

