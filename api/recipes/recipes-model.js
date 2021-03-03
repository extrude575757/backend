const db = require('../../database/connection');




function find() {
    return db("recipes")
    .select("id", "title", "source", "ingredients", "category", "img");
  }
  
  function findBy(filter) {
    return db("recipes").where(filter);
  }
  
  function findById(id) {
    return db("recipes").where({ id }).first();
  }
  
  async function add(recipe) {
    const [id] = await db("recipes").insert(recipe);
    return id;
  }
  
  async function update(id, changes) {
    await db("recipes").where({ id }).update(changes);
    return findById(id);
  }
  
  function remove(id) {
    return db("recipes").where({ id }).del();
  }
  
  module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove,
  };