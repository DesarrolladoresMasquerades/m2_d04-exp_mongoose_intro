// import/require the model
const Cat = require('./models/Cat.model');
// const Cat = require("./models/Cat.model.js"); => you don't have to use ".js"

// CONNECT YOUR APP TO THE MONGODB
require('./configs/database.config');

// ****************************************************************************************************
// ****************************************************************************************************
// Updating cats in the DB
// ----------------------------------------------------------------------------

Cat.findByIdAndUpdate('5d48d51c036739dace0141c8', {
  $set: { name: 'Sandra', age: 17 }
})
  .then(updatedCat => console.log('Updated cat: ', updatedCat))
  .catch(err => console.log('Error while updating the cat: ', err));

Cat.updateMany({ name: 'Garfield' }, { $inc: { age: 1 } }) // age = age + 1
  .then(updatedCats => console.log('Updated cats: ', updatedCats))
  .catch(err => console.log('Error while updating cats: ', err));

// // ****************************************************************************************************
// // ****************************************************************************************************
// // Deleting cats from DB
// // ----------------------------------------------------------------------------

// Cat
//   // .findByIdAndRemove() works the same as .findByIdAndDelete()
//   .findByIdAndDelete('5d48d2676ca362daa1ced681')
//   .then(deletedCat => console.log(`Deleted cat with id: ${deletedCat._id}`))
//   .catch(err => console.log('Error while deleting one cat: ', err));

// Cat.deleteMany({ name: 'Garfield' })
//   .then(deletedCats => {
//     console.log('deleted: ', deletedCats);
//     // deletedCats.forEach(oneCat =>  console.log(`Deleted cat with id: ${oneCat._id}`));
//   })
//   .catch(err => console.log('Error while deleting one cat: ', err));
