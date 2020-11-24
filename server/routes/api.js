const express = require("express");
const urllib = require("urllib");
const router = express.Router();

router.get("/sanity", function(req,res){
  res.send("OK")
})

router.get("/recipes/:ingredient", function (req, res) {
  const ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function(err, response){
      const recipes = JSON.parse(response)
      
      const recipeInfo = recipes.results.map(r => {
        return {
          ingredients: r.ingredients,
          title: r.title,
          thumbnail: r.thumbnail,
          href: r.href
        }})
        console.log(recipeInfo)
      res.send(recipeInfo)
    })
})


module.exports = router;
