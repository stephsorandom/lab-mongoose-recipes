const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");
// console.log(data)

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
 // Run your code here, after you have insured that the connection was made

    //ITERATION 2
    await Recipe.create({
      title: "Beef Empanadas",
      level: "Chef",
      ingredients: ["ground beef", "boiled potatoes", "olvies", "garlic"],
      cuisine: "Spanish",
      dishType: "breakfast",
      duration: 55,
      creator: "Stephanie"
    }).then(console.log);

    //ITERATION 3
    await Recipe.insertMany(data).then(console.log)

    //ITERATION 4
    await Recipe.findOneAndUpdate({title: 'Rigatoni alla Genovese'}, {duration: 100}).then(console.log)

    //ITERATION 5
    await Recipe.deleteOne({title: 'Carrot Cake'}).then((res) => console.log('Carrot Cake Deleted'))

    //ITERATION 6
    mongoose.connection.close()
  })

  .catch(error => {
    console.error('Error connecting to the database', error)

  });

