const express    = require('express');
const bodyParser = require('body-parser');
const User       = require('../models/user.js');
const app        = express();
const router = express.Router();
