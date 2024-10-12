import axios from "axios";
import Cookies from "js-cookie";

class loginService {
  constructor() {
    this.url = "/api";
    this.headers = {
      "Content-Type": "application/json",
    };
  }

  async signup(credentials) {
    try {
      const response = await axios.post(
        `${this.url}/signup`,
        credentials,
        this.headers
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async login(credentials) {
    try {
      const response = await axios.post(
        `${this.url}/login`,
        credentials,
        this.headers
      );
      //   console.log(response);
      var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
      Cookies.set("accessToken", response.data.accessToken, {
        expires: inFifteenMinutes,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  //
  async logout() {
    try {
      const token = Cookies.get("accessToken");

      const response = await axios.post(
        `${this.url}/logout`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Cookies.remove("accessToken", { path: "" });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const loginServiceInstance = new loginService();
export default loginServiceInstance;
