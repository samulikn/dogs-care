import { useState } from "react";
import DropdownList from "./DropdownList";
import Input from "./Input";

function Fidding() {
  const [mealsPerDay, setMealsPerDay] = useState<number | null>(null);

  const getCountFromChild = (n: string) => {
    const newN: number = Number(n);
    setMealsPerDay(newN);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <DropdownList
            label={"How many meals per day?"}
            list={["1", "2", "3", "4"]}
            setCount={getCountFromChild}
          />
        </div>
        {mealsPerDay && (
          <ul className="flex flex-col gap-3">
            {Array(mealsPerDay)
              .fill([])
              .map((_, i) => (
                <li
                  key={"meal" + i}
                  className="[&_label]:text-secondary flex flex-nowrap gap-3 [&_div]:space-y-1 [&_label]:ml-1 [&_label]:text-sm [&_label]:font-semibold"
                  // grid grid-flow-col place-items-center
                >
                  <p className="pt-8">{i + 1}.</p>
                  <div className="flex w-full gap-4">
                    <DropdownList
                      label={"Time slot"}
                      list={[
                        "6:00 - 7:00",
                        "7:00 - 8:00",
                        "8:00 - 9:00",
                        "9:00 - 10:00",
                        "10:00 - 11:00",
                        "11:00 - 12:00",
                        "12:00 - 13:00",
                        "13:00 - 14:00",
                        "14:00 - 15:00",
                        "15:00 - 16:00",
                        "16:00 - 17:00",
                        "17:00 - 18:00",
                        "18:00 - 19:00",
                        "19:00 - 20:00",
                        "20:00 - 21:00",
                        "21:00 - 22:00",
                      ]}
                    />

                    <div className="w-1/2 shrink-0">
                      {/* <label
                        htmlFor={"portion" + i}
                        className="text-secondary m-0 ml-1 text-sm font-semibold"
                      >
                        Gram per portion
                      </label>
                      <input
                        id={"portion" + i}
                        type="number"
                        placeholder="120"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {e.target.value}}
                        className="bg-lightyellow border-outline/30 focus:border-main text-brown-text w-full appearance-none rounded-t-xl border-0 border-b p-3 text-center transition-all"
                      /> */}
                      <Input
                        id={"portion" + i}
                        label="Grams"
                        type="number"
                        placeholder="60"
                      />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        )}
        <div className="">
          <label
            htmlFor="foodrestrictions"
            className="text-secondary m-0 ml-1 text-sm font-semibold"
          >
            Any food allergies or restrictions?
          </label>
          <textarea
            id="foodrestrictions"
            name="foodrestrictions"
            maxLength={4000}
            className="bg-lightyellow border-outline/30 focus:border-primary w-full resize-none overflow-auto rounded-t-xl border-0 border-b px-4 py-3 transition-all"
            placeholder="List any sensitivities here..."
            rows={3}
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default Fidding;
