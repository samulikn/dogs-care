import { useState } from "react";
import DropdownList from "./DropdownList";

function Walking() {
  const [walksPerDay, setWalksPerDay] = useState<number | null>(null);

  const getCountFromChild = (n: string) => {
    const newN: number = Number(n);
    setWalksPerDay(newN);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <DropdownList
          label={"How many walks per day?"}
          list={["1", "2", "3", "4", "5"]}
          setCount={getCountFromChild}
        />
      </div>
      {walksPerDay && (
        <ul className="flex flex-col gap-3">
          {Array(walksPerDay)
            .fill([])
            .map((_, i) => (
              <li
                key={"walk" + i}
                // className="[&_label]:text-secondary grid grid-flow-col place-items-center gap-3 [&_div]:space-y-1"
                className="flex flex-nowrap gap-2 [&_div]:space-y-1"
              >
                <p className="pt-8">{i + 1}.</p>
                <div className="flex w-full flex-nowrap gap-3">
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
                      "22:00 - 23:00",
                    ]}
                  />

                  <DropdownList
                    label={"Duration"}
                    list={[
                      "< 15 min",
                      "15 - 30 min",
                      "30 - 45 min",
                      "45 - 60 min",
                      "> 1 h",
                    ]}
                  />
                </div>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}

export default Walking;
