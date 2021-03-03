const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI =
  "mongodb+srv://Stephanie:Stephanie@cluster0.olh0r.mongodb.net/mongooseRecipes?retryWrites=true&w=majority";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(async() => {

    await Recipe.create({
      title: "Beef Empanadas",
      level: "Amatuer",
      ingredients: ["ground beef", "boiled potatoes", "olvies", "garlic"],
      cuisine: "Spanish",
      dishType: "breakfast",
      duration: 55,
      creator: "Stephanie"
    }).then(console.log);

    // Run your code here, after you have insured that the connection was made

    await Recipe.insertMany(data).then(console.log)



  })

  .catch(error => {
    console.error('Error connecting to the database', error)

  });

