import usersController from "../controllers/usersController.js";

const userRoutes = (app) => {
    app.post("/api/users/create/", usersController.register);
}

export default userRoutes;