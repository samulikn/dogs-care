import { useState } from "react";
import DropdownList from "./DropdownList";

function Walking() {
  const [walksPerDay, setWalksPerDay] = useState<number | undefined>(undefined);
  const [walk, setWalk] = useState<
    { time: string | undefined; duration: string | undefined }[]
  >([]);

  const handleWalks = (n: string) => {
    const newN: number = Number(n);
    const walkArray = Array.from({ length: newN }, () => ({
      time: undefined,
      duration: undefined,
    }));
    setWalksPerDay(newN);
    setWalk(walkArray);
  };

  const setWalkTime = (value: string, id: number) => {
    // const updated = walk.map((prevValue,i) => {i === id ? prevValue.time = value : prevValue})
    const updated = walk.map((v, i) => (i === id ? { ...v, time: value } : v));
    setWalk(updated);
  };

  const setWalkDuration = (value: string, id: number) => {
    // const updated = walk.map((prevValue,i) => {i === id ? prevValue.time = value : prevValue})
    const updated = walk.map((v, i) =>
      i === id ? { ...v, duration: value } : v,
    );
    setWalk(updated);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <DropdownList
          label={"How many walks per day?"}
          list={["1", "2", "3", "4", "5"]}
          setValue={handleWalks}
        />
      </div>
      <input
        type="number"
        name="mealsPerDay"
        value={walksPerDay ?? 0}
        hidden
        readOnly
      />
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
                    id={i}
                    setValue={setWalkTime}
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
                    id={i}
                    setValue={setWalkDuration}
                  />
                </div>
              </li>
            ))}
        </ul>
      )}
      <input
        type="text"
        name="walks"
        value={walk.join("\n") ?? ""}
        hidden
        readOnly
      />
      <div className="">
        <label
          htmlFor="walkingspecifics"
          className="text-secondary m-0 ml-1 text-sm font-semibold"
        >
          Any info about walking?
        </label>
        <textarea
          id="walkingspecifics"
          name="walkingspecifics"
          maxLength={4000}
          className="bg-lightyellow text-secondary border-outline/30 focus:border-primary w-full resize-none overflow-auto rounded-t-xl border-0 border-b px-4 py-3 transition-all"
          placeholder="Any important information about walking..."
          rows={3}
        ></textarea>
      </div>
    </>
  );
}

export default Walking;
