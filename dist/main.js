const renderer = new Renderer()

const search = function(){
    const ingredient = $("#recipeInput").val()
    $.get(`/recipes/${ingredient}`, function(response){
        renderer.render(response)
    })
}

$("#recipes").on("click", ".img", function(){
    alert($(this).data().ingredient)
})

