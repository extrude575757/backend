const express = require("express");
const db = require("./recipes-model");


const router = express.Router();


//get recipes requests

router.get("/", async (req, res) => {
  try {
    const recipes = await db.find();
    res.json(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Cannot get recipes!",
    });
  }
});
// Get recipe by id
router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
      const recipes = await db.findById(id);
      res.json(recipes);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Cannot get recipe by id!",
      });
    }
  });


/*post request with
  // TODO for future verisions see if 
  // front-end wants to map an array with instructions
  // so each step is on a new line for each individual instruction 
  // we can  make instructions here into 
  // an object or array so each direction is on a new 
  // element or has a new key value pair 
{
    "id": 1,
    "title": "Eggwhites with ham",
    "source": "your mom",
    "ingredients": "fried shrimp with chocolate chips",
    "instructions": "Step 1 fry the shrimp step 2 batter the chocolate 3 other stuff as well here",
    "category": "c food",
    "img": "../../assets/img/shrimps.jpg"
}
*/

router.post("/", async (req, res) => {
    const addRecipe = req.body;
    try {
      const newRecipe = await db.add(addRecipe);
      res.json(newRecipe);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "could not add the recipe" });
    }
  });


  // put request edit by /api/recipes/id & its previous shape
  router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    try {
      const updateRecipe = await db.update(id, changes);
      if (updateRecipe) {
        res.json(updateRecipe);
      } else {
        res.status(404).json({ message: 'invalid recipe id' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'error with db', error: err });
    }
  });

  // delete request by id 

  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const count = await db.remove(id);
      if (db) {
        res.json({ message: `deleted ${count} records` });
      } else {
        res.status(404).json({ message: 'invalid recipe id' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'error with db', error: err });
    }
  });


module.exports = router;
