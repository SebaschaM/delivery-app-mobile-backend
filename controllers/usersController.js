import User from "../models/user.js";

const usersController = {
    register(req, res) {
        const user = req.body; // CAPTURA LA INFORMACION DE LO QUE EL CLIENTE ENVIA

        User.create(user, (err, data) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: err.message || "Error al crear el usuario",
                    error: err,
                });
            }

            return res.status(201).json({
                success: true,
                message: "Usuario creado exitosamente",
            });

        });
    }
}

export default usersController;