import { useForm } from "react-hook-form";
import { debounce } from "lodash";
import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

// import useEmailSubscription from "./useEmailSubscription";
import SnackBar from "./SnackBar";

export default function ContactForm({ snackbar, isLoading, onSubmit }) {
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
    // trigger,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  // const { snackbar, isLoading, onSubmit } = useEmailSubscription();

  const [debouncedFormData, setDebouncedFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 在 useCallback 外部創建 debounce 函數

  // 使用 useCallback 並將 debounceFn 作為依賴項
  const debouncedSetFormData = useCallback(
    debounce((data) => {
      setDebouncedFormData((prev) => ({ ...prev, ...data }));
    }, 300),
    // debounce((data) => {
    //   setDebouncedFormData((prev) => ({ ...prev, ...data }));
    // }, 1000),
    []
  );

  // 監聽 email 輸入的變化

  // （包含 type 的寫法(應該是怎麼用)：
  // const subscription = watch((value, { name, type })
  // if (name && (type === 'change' || type === 'blur')) ）

  useEffect(() => {
    const contactForm = watch((value, { name }) => {
      if (name) {
        debouncedSetFormData({ [name]: value[name] });
        // 1.[name] 就是一個計算屬性名，它會被替換為實際變化的字段名。
        // 2.value 是一個物件，包含表單的所有字段值。例如，如果 name 是 'email'，而 value 是 { email: 'user@example.com', name: 'John' }，那麼 value[name] 就會得到 'user@example.com'。
      }
    });
    return () => contactForm.unsubscribe();
    // 清理函數(使用watch和useForm時，會返回一個清理函數把釋放內存react-hook-form的設計)
  }, [watch, debouncedSetFormData]);

  // console.log(debouncedFormData);

  const handleFormSubmit = () => {
    // console.log("Debounced form data:", debouncedFormData);
    onSubmit(debouncedFormData);
  };

  // console.log(watch("email")); // you can watch individual input by pass the name of the input

  const maxLength = 500;
  const [charCount, setCharCount] = useState(0);

  return (
    <>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        // handleSubmit處理submit驗證(react-hook-form內建)。當email字段驗證通過時，觸發handleFormSubmit
        autoComplete="nope"
      >
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col ">
            <div className="md:flex md:flex-row md:gap-8 ">
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-neutral-700 mb-[0.375rem]"
                >
                  Name
                </label>
                <input
                  {...register("name", {
                    required: true,
                    maxLength: 40,
                    minLength: 1,
                  })}
                  autoComplete="nope"
                  onInvalid={(e) => e.preventDefault()}
                  placeholder="Your name"
                  // onBlur={() => trigger("email")}
                  className="text-ellipsis text-sm bg-neutral-50 py-[0.625rem] px-[0.875rem] rounded ring-1 ring-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-700 md:w-[19rem] 3xl:w-[15.5rem]"
                />
              </div>
              <div className="flex flex-col ">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-neutral-700 mb-[0.375rem]"
                >
                  Email
                </label>
                <input
                  onInvalid={(e) => e.preventDefault()}
                  type="email"
                  placeholder="example@example.com"
                  autoComplete="nope"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                  className="text-ellipsis text-sm bg-neutral-50 py-[0.625rem] px-[0.875rem] rounded ring-1 ring-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-700 md:w-[19rem] 3xl:w-[15.5rem]"
                  // onBlur={() => trigger("email")} // 觸發email字段的驗證
                  // onChange={() => trigger("email")} // 值變化時也觸發驗證
                />
              </div>
            </div>

            <div className="flex flex-col gap-[0.375rem] mt-6 md:mt-0">
              <label
                htmlFor="name"
                className="text-sm font-medium text-neutral-700"
              >
                Message
              </label>
              <textarea
                {...register("message", {
                  required: true,
                  onChange: (e) => {
                    setCharCount(e.target.value.length);
                  },
                })}
                //小心不要把onChange寫在外面，這樣會和register衝突
                onInvalid={(e) => e.preventDefault()}
                placeholder="Write your message..."
                maxLength={maxLength}
                className="text-ellipsis text-sm bg-neutral-50 py-[0.625rem] md:py-3 px-[0.875rem] rounded ring-1 ring-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-700 h-[84px] md:w-full 3xl:w-[528px]"
              />
              <div className="text-neutral-500 text-sm text-right">
                {charCount}/{maxLength}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className={`text-white bg-indigo-700 hover:bg-indigo-800 shadow-soft py-[0.625rem] px-[0.875rem] rounded md:w-full md:h-[2.5rem]  text-sm font-medium ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
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
ContactForm.propTypes = {
  snackbar: PropTypes.shape({
    show: PropTypes.bool,
    message: PropTypes.string,
    isError: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
