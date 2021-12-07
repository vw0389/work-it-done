const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const crypto = require('crypto');
const sess = {
    secret: crypto.randomBytes(40).toString('hex'),
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}
const app = express();
const PORT = process.env.PORT || 3333;
const hbs = exphbs.create({});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let public = path.join(__dirname, 'Public');

app.use(express.static(public));

app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.listen(PORT, () => console.log(`Now listening on port ${PORT} at ${new Date().getMinutes()}`));
