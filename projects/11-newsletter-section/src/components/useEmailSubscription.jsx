// useEmailSubscription.js
import dayjs from "dayjs";
import { useState } from "react";
import axios from "axios";

export default function useEmailSubscription() {
  const [snackbar, setSnackbar] = useState({
    show: false,
    message: "",
    isError: false,
    id: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  // console.log(snackbar.id);

  async function onSubmit(email) {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://www.greatfrontend.com/api/projects/challenges/newsletter",
        { email }
      );

      if (response.status === 200 && response.data && response.data.message) {
        setSnackbar({
          show: true,
          message: response.data.message,
          isError: false,
          id: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        });
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setSnackbar({
        show: true,
        message:
          error.response?.data?.message ||
          "Failed to subscribe. Please ensure your email is correct or try again later.",
        isError: true,
        id: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      });
    } finally {
      setIsLoading(false);
    }
  }

  return { snackbar, isLoading, onSubmit };
}
