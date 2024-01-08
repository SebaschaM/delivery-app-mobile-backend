import express from 'express';
import http from 'http';
import morgan from 'morgan';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';

const app = express();

//CONFIG - VARS
const server = http.createServer(app);
const port = process.env.PORT || 3000;

//CONFIG - SERVER
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.disable('x-powered-by');
app.set('port', port);

//ROUTES
userRoutes(app);

//ROUTES INITIAL
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

//LOGS
app.use((err, res, req, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

//LISTEN PORT
server.listen(port, '192.168.100.152' || 'localhost', function () {
    console.log('Aplicacion en NodeJS ', port, ' iniciando');
});