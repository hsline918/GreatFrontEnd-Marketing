import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export default function ({ question, answer }) {
  return (
    <Disclosure as="div" defaultOpen={true} className="grid gap-2">
      {({ open }) => (
        <>
          <DisclosureButton className="text-neutral-900 text-lg font-medium text-left flex justify-between items-center w-full focus:outline-2  focus:outline-indigo-400">
            <span>{question}</span>
            <img
              src={
                open
                  ? "./assets/indeterminate-circle-line.svg"
                  : "./assets/add-circle-line.svg"
              }
              alt={open ? "open" : "close"}
            />
          </DisclosureButton>
          <DisclosurePanel className="text-neutral-600">
            {answer}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
