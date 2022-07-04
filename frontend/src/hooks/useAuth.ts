import axios from "axios";
import { useEffect, useState } from "react";
import config from "../config/config.json";
export const useAuth = () => {
  const [check, setCheck] = useState<{
    checked: boolean;
    isAuthenticated: boolean;
  }>({ checked: false, isAuthenticated: false });
  useEffect(() => {
    const checkJwt = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}/tokenVerification`);
        setCheck({
          checked: true,
          isAuthenticated: response.data.isAuthenticated,
        });
      } catch (error) {
        setCheck({ checked: false, isAuthenticated: false });
      }
    };
    checkJwt();
  }, []);
  return check;
};
