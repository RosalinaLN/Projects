const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const config = require('config');

const app = express();

app.use(cors());  //add cors to connect different port between server and client
//currently server is 4000 and client is 3000

//BodyParser middleware
app.use(express.json());

//DB config
const db = config.get("mongoURI");

//connect to mongoDB
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
.then(() => console.log('DB Connected!'))
.catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
});

//route url
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

//SERVE STATIC ASSETS IF IT'S IN PRODUCTION
if (process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    })
}

//set the port
const port = process.env.PORT || 4000;

app.listen(port, () => { console.log(`server listening on port ${port}`) })