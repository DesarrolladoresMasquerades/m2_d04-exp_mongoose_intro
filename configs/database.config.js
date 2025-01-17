const mongoose = require("mongoose");
// CONNECT YOUR APP TO THE MONGODB
mongoose
  //       Atlas link   cats-app-dev is the name of our database
  //            |            |
  .connect(
    `mongodb+srv://${process.env.MG_USERNAME}:${process.env.MG_PWD}@cluster0.ckp2v.mongodb.net/cats-app-dev?retryWrites=true&w=majority`
  )
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));
