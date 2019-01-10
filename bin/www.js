// This will be our application entry. We'll setup our server here.
import  http from 'http';
import app from '../server/app'; // The express app we just created
import db from '../server/models';

import { Todo } from '../server/models';
import { TodoItem } from '../server/models';

const sequelize = db.sequelize;

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Running on port ${port}...`)
    sequelize
    .authenticate()
    .then(() => Todo.sync({ force: true }))
    .then(() => TodoItem.sync({ force: true }))
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
});