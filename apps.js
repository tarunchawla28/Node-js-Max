const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
const errorController = require('./controllers/error')
const db = require('./util/database');
// db.execute('SELECT * FROM products')
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log(err);
//     })
app.set('view engine', 'ejs');
app.set('views', 'views')
app.use(shopRoutes);
app.use('/admin', adminRoutes);


function ignoreFavicon(req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
        res.sendStatus(204);
    } else {
        next();
    }
}
app.use(ignoreFavicon);

app.use(errorController.get404)
app.listen(3000);
