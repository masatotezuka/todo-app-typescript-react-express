import axios from "axios";
import React, { useState } from "react";

export const useToken = () => {
  const [token, setToken] = useState<string>("");

  const fetchToken = async (data: { email: string }) => {
    const response = await axios.post(
      "http://localhost:8000/api/user/resetPassword",
      data
    );
    const verificationToken = response.data.verificationToken;

    setToken(verificationToken);
  };

  return { token, fetchToken };
};
