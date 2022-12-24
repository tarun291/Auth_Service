const express = require('express');

const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const apiRoutes = require('./routes/index');

const app = express();

const { User } = require('./models/index');

const bcrypt = require('bcrypt');

const prepareAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on Port:${PORT}`);
        const incommingPassword = "Sarthak";
        const user = await User.findByPk(9);
        const response = bcrypt.compareSync(incommingPassword, user.password);
        console.log(response);
    })
}
prepareAndStartServer();