import axios from "axios";
import Cookies from "js-cookie";

class ProgressService {
  constructor() {
    this.url = "/api/progress";
    this.headers = {
      "Content-Type": "application/json",
    };
  }

  async getProgress() {
    try {
      const token = Cookies.get("accessToken");
      console.log(token);
      if (!token) {
        console.log("No token found");
        return [];
      }
      const response = await axios.post(
        `${this.url}/completed`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      return response.data.progress;
    } catch (error) {
      throw error;
    }
  }

  async updateProgress(questionName, isCompleted) {
    try {
      const token = Cookies.get("accessToken");
      console.log(token);
      if (!token) {
        console.log("No token found");
        return;
      }
      const response = await axios.post(
        `${this.url}/update`,
        { question: questionName, isCompleted },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      throw error;
    }
  }
}

const progressServiceInstance = new ProgressService();
export default progressServiceInstance;
