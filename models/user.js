import db from "../config/config.js";

const User = {};

User.create = (user, result) => {

    const sql = "INSERT INTO users (email, name, last_name, phone, image, password, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    db.query(sql, [user.email, user.name, user.last_name, user.phone, user.image, user.password, new Date(), new Date()],

        (err, res) => {
            if (err) {
                console.log(err);
                result(err, null);
                return;
            } else {
                console.log('Id del nuevo usuario', res.insertId);
                result(null, res.insertId); 
            }
        });
}

export default User;