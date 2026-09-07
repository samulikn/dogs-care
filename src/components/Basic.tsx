import DropdownList from "./DropdownList";
import Input from "./Input";

function Basic() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* <div className="flex flex-col gap-1">
          <label
            className="text-secondary m-0 ml-1 text-sm font-semibold"
            htmlFor="dogname"
          >
            Dog's name
          </label>
          <input
            id="dogname"
            type="text"
            placeholder="e.g. Marta"
            maxLength={20}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {e.target.value}}
            className="bg-lightyellow border-outline/30 focus:border-main text-brown-text h-10 w-full appearance-none rounded-t-xl border-0 border-b p-2 transition-all"
          />
        </div> */}
        <Input
          id="dogname"
          label="Dog's name"
          type="text"
          placeholder="e.g. Marta"
        />
        <DropdownList
          label={"Age in years"}
          list={["under 1 year", "1 - 2 years", "3 - 7 years", "8+ years"]}
        />
      </div>
    </>
  );
}

export default Basic;
