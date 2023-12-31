require('dotenv').config();
const express = require('express');
const cors = require('cors');

const errorHandlerMiddleware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-found');

const PORT = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors());

//custom middleware
//app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.use(express.json());

//routes
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1', require('./routes/passwordRoutes'));
app.use('/api/v1/users', require('./routes/userRoutes'));
app.use('/api/v1/students', require('./routes/studentRoutes'));
app.use('/api/v1/organizations', require('./routes/organizationRoutes'));
app.use('/api/v1/professional-profiles', require('./routes/professionalRoutes'));
app.use('/api/v1/social-profiles', require('./routes/socialRoutes'));
app.use('api/v1/broadcasts', require('./routes/broadcastsRoutes'));
app.use('api/v1/posts', require('./routes/postsRoutes'));
app.use('api/v1/jobs', require('./routes/jobsRoutes'));
app.use(require('./routes/dialogflow'))

app.listen(PORT, () => {
    console.log(`Started on port ${PORT}...`);
});