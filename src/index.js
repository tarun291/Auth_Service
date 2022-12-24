const express = require('express');

const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const apiRoutes = require('./routes/index');

const UserService = require('./services/user-service');
const app = express();

const prepareAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on Port:${PORT}`);
        const service = new UserService();
        // const newToken=service.createToken({email:"Tarun@gmail.com",id:1});
        // console.log(newToken);
        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlRhcnVuQGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE2NzE4NzE2OTUsImV4cCI6MTY3MTg3MTcyNX0.wuR-WlRYGgUVYMBZcVD-iqYPzPexN5tnONXN9C01-3o";
        // const response = service.veryfyToken(token);
        // console.log(response);
    })
}
prepareAndStartServer();