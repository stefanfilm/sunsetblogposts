const express = require('express');
const routes = require('./controllers/api/api');
const sequelize = require('./config/connection.js')
const exphbs = require('express-handlebars');
const homeRoutes = require('./controllers/homeroutes/index.js');
const path = require('path');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", routes);
app.use("/", homeRoutes)


// sync sequelize models to the database, then turn on the server
sequelize.sync({
  force : false
}).then( () => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})

