const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3333;
const hbs = exphbs.create({});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.listen(PORT, () => console.log(`Now listening on port ${PORT} at ${new Date().getMinutes()}`));
