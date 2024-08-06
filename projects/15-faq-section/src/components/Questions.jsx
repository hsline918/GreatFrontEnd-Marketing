export default function ({ question, answer }) {
  return (
    <>
      <div className="flex flex-row items-start place-content-between gap-4 py-7 first:pt-0 ">
        <div className="grid gap-2">
          <h3 className="text-neutral-900 text-lg font-medium">{question}</h3>
          <p className="text-neutral-600">{answer}</p>
        </div>
        <img src="./assets/indeterminate-circle-line.svg" />
      </div>
    </>
  );
}
