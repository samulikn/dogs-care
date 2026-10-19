import { useState } from "react";
import DropdownList from "./DropdownList";

function Walking() {
  const [walksPerDay, setWalksPerDay] = useState<number | undefined>(undefined);
  const [walk, setWalk] = useState<
    { time: string | undefined; duration: string | undefined }[]
  >([]);

  const handleWalks = (value: string) => {
    const newN: number = Number(value);
    const walkArray = Array.from({ length: newN }, () => ({
      time: undefined,
      duration: undefined,
    }));
    setWalksPerDay(newN);
    setWalk(walkArray);
  };

  const setWalkTime = (value: string, i: number) => {
    const updated = walk.map((v, index) =>
      index === i ? { ...v, time: value } : v,
    );
    setWalk(updated);
  };

  const setWalkDuration = (value: string, i: number) => {
    const updated = walk.map((v, index) =>
      index === i ? { ...v, duration: value } : v,
    );
    setWalk(updated);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <DropdownList
          label={"How many walks per day?"}
          list={["1", "2", "3", "4", "5"]}
          value={walksPerDay?.toString()}
          onSelectChange={handleWalks}
        />
      </div>
      <input
        type="number"
        name="walksPerDay"
        value={walksPerDay ?? ""}
        hidden
        readOnly
      />
      {walksPerDay && (
        <ul className="flex flex-col gap-3">
          {Array(walksPerDay)
            .fill([])
            .map((_, i) => (
              <li
                key={`walk-${i + 1}`}
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
                    value={walk[i]?.time}
                    onSelectChange={(selected) => setWalkTime(selected, i)}
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
                    value={walk[i]?.duration}
                    onSelectChange={(selected) => setWalkDuration(selected, i)}
                  />
                </div>
              </li>
            ))}
        </ul>
      )}
      <input
        type="text"
        name="walks"
        value={JSON.stringify(walk)}
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
