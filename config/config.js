import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sebas123',
    database: 'udemy_delivery'
});

db.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Base de datos conectada');
});

export default db;