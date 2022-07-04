import axios from "axios";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useToken = () => {
  const [token, setToken] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchToken = async (data: { email: string }) => {
    const response = await axios.post(
      "http://localhost:8000/api/user/resetPassword",
      data
    );
    const verificationToken = response.data.verificationToken;
    console.log(verificationToken);

    setToken(verificationToken);
  };

  return { token, fetchToken, searchParams };
};
