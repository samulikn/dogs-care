import { useEffect, useRef, useState } from "react";
import ArrowDropDown from "../assets/icons/arrow_drop_down.svg?react";

type DropDownListProps = {
  label: string;
  list: string[];
  setCount?: (n: string) => void;
};

function DropdownList({ label, list, setCount }: DropDownListProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative flex w-full flex-col gap-1">
      <p className="text-secondary m-0 ml-1 text-sm font-semibold">{label}</p>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="bg-lightyellow border-outline/30 focus:border-main text-brown-text relative m-0 h-10 w-full rounded-t-xl border-0 border-b p-2 text-start transition-all overflow-hidden"
      >
        {selected ?? <p className="text-secondary/60">Select...</p>}
        {/* <div className="absolute inset-y-4 right-2 flex items-center"> */}
          {/* <img src={ArrowDropDown} alt="arrow drop down" className="h-8 w-8" /> */}
          <ArrowDropDown className="absolute inset-y-1 right-0 flex h-8 w-8 items-center" />
        {/* </div> */}
      </button>
      {open && (
        <ul className="text-secondary bg-lightyellow absolute top-16 z-10 mr-1 max-h-50 w-full overflow-auto rounded-lg border-none shadow-lg">
          {list.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setCount?.(option);
                setOpen(false);
              }}
              className="cursor-pointer px-2 py-2 hover:bg-white hover:last:rounded-b-lg"
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
