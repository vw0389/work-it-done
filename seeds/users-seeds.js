const Users = require("../models");

const userdata = [
    {
        email: 'nwestnedge0@cbc.ca',
        password: 'password123'
    },
    {
        email: 'rmebes1@sogou.com',
        password: 'password123'
    },
    {
        email: 'cstoneman2@last.fm',
        password: 'password123'
    },
    {
        email: 'ihellier3@goo.ne.jp',
        password: 'password123'
    },
    {
        email: 'gmidgley4@weather.com',
        password: 'password123'
    },
    {
        email: 'larnout5@imdb.com',
        password: 'password123'
    },
    {
        email: 'hnapleton6@feedburner.com',
        password: 'password123'
    },
    {
        email: 'kperigo7@china.com.cn',
        password: 'password123'
    },
    {
        email: 'lmongain8@google.ru',
        password: 'password123'
    },
    {
        email: 'bsteen9@epa.gov',
        password: 'password123'
    }
];

const seedUsers = () => Users.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;