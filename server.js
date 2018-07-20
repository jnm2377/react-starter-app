//THIS IS WHERE WE SET UP  OUR SERVER AND CONNECT IT TO MONGODB
const express    = require('express');
const mongoose   = require('mongoose');
const morgan     = require('morgan');
const cors 			 = require('cors');
const bodyParser = require('body-parser');
require('pretty-error').start();

const app = express();
const router = express.Router();

//env variables
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern-starter';

//connecting to mongoose
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;
db.on( 'error', ( err ) => console.log( err.message + ' is Mongod not running?' ));
db.on( 'connected', () => console.log( 'Mongo OK: ', MONGODB_URI ));
db.on( 'disconnected', () => console.log( 'Mongo Disconnected' ));

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.all('*', (req, res) => {
  console.log('Returning a 404 from the catch-all route');
  return response.sendStatus(404);
});



//TURN ON SERVER-----------------------------------------
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
