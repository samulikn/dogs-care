import { useState } from "react";
import DropdownList from "./DropdownList";
import Input from "./Input";

function Feeding() {
  const [mealsPerDay, setMealsPerDay] = useState<number | undefined>(undefined);
  const [meal, setMeal] = useState<
    { time: string | undefined; portion: string | undefined }[]
  >([]);

  const setCountOfMeals = (value: string) => {
    const newN: number = Number(value);
    const mealsArray = Array.from({ length: newN }, () => ({
      time: undefined,
      portion: undefined,
    }));
    setMealsPerDay(newN);
    setMeal(mealsArray);
  };

  const setMealTime = (value: string, i: number) => {
    const updated = meal.map((v, index) =>
      index === i ? { ...v, time: value } : v,
    );
    setMeal(updated);
  };

  const setMealPortion = (value: string, i: number) => {
    const updated = meal.map((v, index) =>
      index === i ? { ...v, portion: value } : v,
    );
    setMeal(updated);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <DropdownList
            label={"How many meals per day?"}
            list={["1", "2", "3", "4"]}
            value={mealsPerDay?.toString()}
            onSelectChange={setCountOfMeals}
          />
          <input
            type="number"
            name="mealsPerDay"
            value={mealsPerDay ?? ""}
            hidden
            readOnly
          />
        </div>
        {mealsPerDay && (
          <ul className="flex flex-col gap-3">
            {Array(mealsPerDay)
              .fill([])
              .map((_, i) => (
                <li
                  key={`meal-${i + 1}`}
                  className="[&_label]:text-secondary flex flex-nowrap gap-3 [&_div]:space-y-1 [&_label]:ml-1 [&_label]:text-sm [&_label]:font-semibold"
                >
                  <p className="pb-1 self-end">{i + 1}.</p>
                  <div className="flex w-full gap-3">
                    <DropdownList
                      label="Time slot"
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
                      value={meal[i]?.time}
                      onSelectChange={(selected) => setMealTime(selected, i)}
                    />
                    <div className="w-1/2 shrink-0">
                      <Input
                        id={`portion-${i + 1}`}
                        label="Portion"
                        type="text"
                        placeholder='ex. "1 cup | 25 g + 1/2 wet food"'
                        value={meal[i]?.portion ?? ""}
                        onValueChange={(value) => setMealPortion(value, i)}
                      />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        )}
        <input
          type="text"
          name="meals"
          value={JSON.stringify(meal)}
          readOnly
          hidden
        />
        <div className="flex flex-col gap-1">
          <label
            htmlFor="foodrestrictions"
            className="text-secondary m-0 ml-1 text-sm font-semibold"
          >
            Any food allergies, restrictions or feeding features?
          </label>
          <textarea
            id="foodrestrictions"
            name="foodrestrictions"
            maxLength={4000}
            className="bg-lightyellow text-secondary border-outline/30 focus:border-primary w-full resize-none overflow-auto rounded-t-xl border-0 border-b px-4 py-3 transition-all"
            placeholder="List any sensitivities here or feeding specifics..."
            rows={3}
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default Feeding;
