import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
    return res.json({ message: "Hello, world22!"});    
})

export default routes;