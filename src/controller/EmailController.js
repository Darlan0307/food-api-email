import SendEmail from "../services/SendEmail.js";
import { VerificEmail } from "../services/VerificEmail.js";

export class EmailController {
  async EnviarEmail(req, res) {
    const { email } = req.body;

    try {
      const isValid = await VerificEmail(email);

      if (!isValid) {
        return res.status(400).json({ message: "Invalid email address" });
      }

      const response = await SendEmail(email);

      res.status(200).json({ message: response });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
