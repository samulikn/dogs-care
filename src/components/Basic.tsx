import { useState } from "react";
import DropdownList from "./DropdownList";

function Basic() {
  const [name, setName] = useState("");

  return (
    <>
      <div className="[&_label]:text-secondary grid grid-cols-1 gap-6 md:grid-cols-2 [&_div]:space-y-1 [&_label]:ml-1 [&_label]:text-sm [&_label]:font-semibold">
        <div>
          <label htmlFor="name">Dog's name</label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Marta"
            value={name}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
            ) => setName(e.target.value)}
            className="bg-lightyellow border-outline/30 focus:border-main text-brown-text w-full appearance-none rounded-t-xl border-0 border-b p-3 transition-all"
          />
        </div>
        <DropdownList
          label={"Age in years"}
          list={["under 1 year", "1 - 2 years", "3 - 7 years", "8+ years"]}
        />
      </div>
    </>
  );
}

export default Basic;
