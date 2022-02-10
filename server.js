/**
 * Liveshare hack
 */

require("./configs/database.config");

const Cat = require("./models/Cat.model");

// Cat.findOneAndUpdate() is dangerous because it will update the worng objects
// if the fiilter b'object is "wrong"

Cat.findByIdAndUpdate(
  "6204fef1607d31c0dd9503b2",
  { $set: { name: "Sandra" } },
  { new: true }
).then((cat) => console.log(cat));
//
