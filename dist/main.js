const renderer = new Renderer()

const search = function(){
    const ingredient = $("#recipeInput").val()
    $.get(`/recipes/${ingredient}`, function(response){
        renderer.render(response)
    })
}

