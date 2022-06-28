import axios from "axios";
import { useEffect, useState } from "react";
import config from "../config/config.json";
export const useAuth = () => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkJwt = async () => {
      const response = await axios.get(`${config.apiUrl}/tokenVerification`);

      setAuthenticated(response.data);
    };
    checkJwt();
  }, []);
  return isAuthenticated;
};
