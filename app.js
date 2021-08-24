require('dotenv').config()


const Express = require('express');
const app = Express();
app.use(Express.json())

const dbConnection = require('./db');
const controllers = require('./controllers')



app.use('/user',controllers.userController)






dbConnection.authenticate()
.then(() => dbConnection.sync())  // =>(force:true)
.then(()=> {
    app.listen(process.env.PORT, () => {
        console.log(`[server]: app is listening on ${process.env.PORT}` )
    });
})
 .catch(err => {
     console.log('[server:] server crashed');
     console.log((err));
 })