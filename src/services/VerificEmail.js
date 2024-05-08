import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const apikey = process.env.API_KEY;

export const VerificEmail = async (email) => {
  try {
    const response = await axios.get(
      `https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${apikey}`
    );

    const status = response.data.data.status;

    if (status == "invalid" || status == "disposable") {
      return false;
    }

    return true;
  } catch (error) {
    return error;
  }
};
