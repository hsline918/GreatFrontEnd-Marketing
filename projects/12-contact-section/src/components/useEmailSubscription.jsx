// useEmailSubscription.js

import dayjs from "dayjs";
import { useState } from "react";
import axios from "axios";

export default function useEmailSubscription(setSuccess, setMessage) {
  const [snackbar, setSnackbar] = useState({
    show: false,
    message: "",
    isError: false,
    id: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(formData) {
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://www.greatfrontend.com/api/projects/challenges/contact",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );

      if (response.status === 200 && response.data && response.data.message) {
        setSuccess(true);
        setMessage(response.data.message);
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setSnackbar(() => ({
        show: true,
        message:
          error.response?.data?.message ||
          "Failed to submit. Please ensure your details are correct or try again later.",
        isError: true,
        id: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      }));
      setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  }

  return { snackbar, isLoading, onSubmit };
}
