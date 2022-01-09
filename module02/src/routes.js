import { Router } from "express";

import User from "./app/models/User";

const routes = new Router();

routes.get("/", async (req, res) => {
    const user = await User.create({
      name: "Luciane Souza",
      email: "lucidrigo@gmail.com",
      password_hash: "9999999",
    });

    return res.json(user);
});

export default routes;
