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
      console.log(recipes.results)
      res.send(recipes.results)
    })
})


module.exports = router;
