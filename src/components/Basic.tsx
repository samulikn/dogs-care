import { useState } from "react";
import DropdownList from "./DropdownList";
import Input from "./Input";

function Basic() {
  const [dog, setDog] = useState<{
    dogname: string | undefined;
    age: string | undefined;
  }>({ dogname: undefined, age: undefined });

  const handleChangeDogname = (name: string) => {
    setDog({ ...dog, dogname: name });
  };

  const handleChangeAge = (value: string) => {
    setDog({ ...dog, age: value });
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          id="dogname"
          label="Dog's name *"
          type="text"
          placeholder="e.g. Marta"
          required
          value={dog.dogname}
          onValueChange={handleChangeDogname}
        />
        <DropdownList
          label={"Age in years"}
          list={["under 1 year", "1 - 2 years", "3 - 7 years", "8+ years"]}
          value={dog.age}
          onSelectChange={handleChangeAge}
        />
        <input
          type="text"
          name="dog"
          value={JSON.stringify(dog)}
          readOnly
          hidden
        />
      </div>
    </>
  );
}

export default Basic;
