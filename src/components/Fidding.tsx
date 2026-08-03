import { useState } from "react";
import DropdownList from "./DropdownList";

function Fidding() {
  const [portion, setPortion] = useState<string>("");
  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 [&_div]:space-y-1">
        <DropdownList label={"Meals per day"} list={["1", "2", "3", "4"]} />
        <div>
          <label
            htmlFor="portion"
            className="text-secondary ml-1 text-sm font-semibold"
          >
            Gram per portion
          </label>
          <input
            id="portion"
            type="number"
            placeholder="120"
            value={portion}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
            ) => setPortion(e.target.value)}
            className="bg-lightyellow border-outline/30 focus:border-main text-brown-text w-full appearance-none rounded-t-xl border-0 border-b p-3 transition-all"
          />
        </div>
      </div>
    </>
  );
}

export default Fidding;
