import { useState } from "react";
import DropdownList from "./DropdownList";
import Input from "./Input";

function Basic() {
  const [age, setAge] = useState<string | undefined>(undefined);

  const handleChangeAge = (value: string, i: number) => {
    if (value && i === 0) setAge(value);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Input
          id="dogname"
          label="Dog's name"
          type="text"
          placeholder="e.g. Marta"
        />
        <DropdownList
          label={"Age in years"}
          list={["under 1 year", "1 - 2 years", "3 - 7 years", "8+ years"]}
          id={0}
          setValue={handleChangeAge}
        />
        <input type="text" name="Age" value={age ?? ""} readOnly hidden />
      </div>
    </>
  );
}

export default Basic;
