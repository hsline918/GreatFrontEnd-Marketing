export default function GetInTouch() {
  return (
    <div className="shadow-moderate p-4 md:p-8 border border-neutral-200 rounded-lg flex flex-col gap-4 md:flex-row md:justify-between">
      <div className="grid gap-2 md:w-[30.375rem] md:h-[3.75rem]">
        <h2 className="text-neutral-900 text-xl font-semibold">
          Can’t find the answer you’re looking for?
        </h2>
        <p className="text-neutral-600 text-base font-normal">
          Reach out to our
          <a
            className="text-indigo-700 hover:text-indigo-800 focus:text-indigo-800 focus:ouline-1 focus:outline-indigo-400 focus:bg-transparent"
            href="#"
          >
            {" "}
            customer support{" "}
          </a>{" "}
          team.
        </p>
      </div>
      <button className=" text-white text-base font-medium text-center py-3 px-5 bg-indigo-700 hover:bg-indigo-800 focus:bg-indigo-800 shadow-soft rounded md:w-[8.625rem] md:h-12 md:self-center">
        Get in touch
      </button>
    </div>
  );
}
