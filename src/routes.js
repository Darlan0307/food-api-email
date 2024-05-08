import { Router } from "express";
import { EmailController } from "./controller/EmailController.js";

const routes = Router();
const emailcontroller = new EmailController();

routes.get("/", (req, res) => {
  res.json({ message: "Running" });
});

routes.post("/email", emailcontroller.EnviarEmail);

export default routes;
