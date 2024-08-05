import { useForm } from "react-hook-form";
import { debounce } from "lodash";
import { useState, useCallback, useEffect } from "react";

import useEmailSubscription from "./useEmailSubscription";
import SnackBar from "./SnackBar";

export default function EmailForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { snackbar, isLoading, onSubmit } = useEmailSubscription();

  const [debouncedEmail, setDebouncedEmail] = useState("");

  // 創建一個 debounced 函數
  const debouncedSetEmail = useCallback(
    debounce((value) => {
      setDebouncedEmail(value);
      console.log("Debounced email:", value); // 這裡的 console.log 會被 debounce
    }, 300), // 300ms 延遲
    []
  );

  // 監聽 email 輸入的變化
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "email") {
        debouncedSetEmail(value.email);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, debouncedSetEmail]);

  const handleFormSubmit = () => {
    onSubmit(debouncedEmail);
  };

  // console.log(watch("email")); // you can watch individual input by pass the name of the input

  return (
    <>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col md:flex-row gap-4"
      >
        <div className="flex flex-col gap-3 md:gap-4">
          <input
            name="userEmail"
            // aria-describedby="email-hint"
            onInvalid={(e) => e.preventDefault()}
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            // required
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            className="text-ellipsis text-sm bg-neutral-50 py-[0.625rem] px-[0.875rem] rounded ring-1 ring-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-700 md:w-[20.875rem]"
          />
          {errors?.email?.type === "required" && (
            <p className="text-red-600 text-sm font-normal">
              Email address is required.
            </p>
          )}
          {errors?.email?.type === "pattern" && (
            <p className="text-red-600 text-sm font-normal">
              Please enter a valid email address.
            </p>
          )}
          <p className="text-base font-normal text-neutral-600">
            We only send you the best! No spam.
          </p>
        </div>
        <button
          type="submit"
          className={`text-white bg-indigo-700 hover:bg-indigo-800 shadow-soft py-[0.625rem] px-[0.875rem] rounded md:w-[8.125rem] md:h-[2.5rem] text-sm font-medium ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {snackbar.show && (
        <SnackBar
          message={snackbar.message}
          isError={snackbar.isError}
          id={snackbar.id}
        />
      )}
    </>
  );
}
