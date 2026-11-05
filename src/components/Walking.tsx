import { useState } from "react";
import DropdownList from "./DropdownList";
import { time, sessions} from "../data/lists"

function Walking() {
  const [walksPerDay, setWalksPerDay] = useState<number | undefined>(undefined);
  const [walk, setWalk] = useState<
    { time: string | undefined; duration: string | undefined }[]
  >([]);

  const handleWalks = (value: string) => {
    const newN: number = Number(value);
    const walkArray = Array.from(
      { length: newN },
      (_, i) =>
        walk[i] ?? {
          time: undefined,
          duration: undefined,
        },
    );
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
    <div className="flex flex-col gap-4">
      <div className="flex w-3/5 flex-nowrap md:w-1/3">
        <DropdownList
          label={"How many walks per day? *"}
          list={sessions}
          value={walksPerDay?.toString()}
          onSelectChange={handleWalks}
          required
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
                className="[&_div]:text-secondary border-outline/30 flex flex-nowrap items-center justify-center gap-1 rounded-xl border-2 p-2 shadow-md md:gap-3 [&_div]:space-y-1"
              >
                <div className="bg-lightyellow flex h-8 w-8 shrink-0 items-center justify-center self-start rounded-full">
                  <p className="text-secondary text-sm font-bold">{i + 1}.</p>
                </div>
                <div className="flex w-full flex-col gap-1 md:flex-row md:gap-3">
                  <DropdownList
                    label={"Time slot"}
                    list={time}
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
      <div className="flex flex-col gap-1">
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
    </div>
  );
}

export default Walking;
