import { useState } from "react";
import ArrowDropDown from "../../public/arrow_drop_down.svg";


type DropDownListProps = {
    label: string;
    list: string[];
}
function DropdownList({ label, list }: DropDownListProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(null);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    !e.target ? setOpen(false) : setOpen(!open);
  }

//   const options = ["under 1 year", "1 - 2 years", "3 - 7 years", "8+ years"];
//   const label = "Age in years";

  return (
    <div className="relative w-full">
      <p className="text-secondary ml-1 text-sm font-semibold">{label}</p>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="bg-lightyellow border-outline/30 focus:border-main text-brown-text relative w-full rounded-t-xl border-0 border-b p-3 text-start transition-all m-0"
      >
        {selected ?? "Select an option"}
        <div className="absolute inset-y-0 right-3 flex items-center">
          <img src={ArrowDropDown} alt="arrow drop down" className="h-8 w-8" />
        </div>
      </button>
      {open && (
        <ul className="text-secondary bg-lightyellow absolute z-10 w-full rounded-lg border-none shadow-lg">
          {list.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="cursor-pointer px-4 py-2 hover:bg-white hover:last:rounded-b-lg"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownList;
