require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const User = require('./models/User');
const logger = require('./middleware/logger');

const app = express();

//middleware
app.use(cors());

//custom middleware
app.use(logger);

app.use(express.json());

//routes
app.use('/api/v1/users', require('./routes/userRoutes'));


app.listen(PORT, () => {
    console.log(`Started on port ${PORT}...`);
});