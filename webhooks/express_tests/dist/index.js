import express from 'express';
import homeRoute from './routes/home_route.js';
import dialogflowRoute from './routes/dialogflow_route.js';
const webApp = express();
webApp.use(express.urlencoded({
    extended: true
}));
webApp.use(express.json());
const PORT = process.env.PORT || 5000;
webApp.use(homeRoute);
webApp.use(dialogflowRoute);
webApp.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});
//# sourceMappingURL=index.js.map