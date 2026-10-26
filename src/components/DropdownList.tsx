import { useEffect, useId, useRef, useState } from "react";
import ArrowDropDown from "../assets/icons/arrow_drop_down.svg?react";

type DropDownListProps = {
  label: string;
  list: string[];
  value: string | undefined;
  onSelectChange: (selected: string) => void;
  required?: boolean;
};

function DropdownList({
  label,
  list,
  value,
  onSelectChange,
  required = false,
}: DropDownListProps) {
  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const validationRef = useRef<HTMLInputElement>(null);
  const validationId = useId();

  // custom dropdowns have no native validation, so a hidden input carries it
  useEffect(() => {
    validationRef.current?.setCustomValidity(
      required && !value ? "Please select an option." : "",
    );
  }, [required, value]);

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
        className="bg-lightyellow border-outline/30 focus:border-main text-brown-text relative m-0 h-10 w-full overflow-hidden rounded-t-xl border-0 border-b p-2 text-start transition-all"
      >
        {value ?? <span className="text-secondary/60">Select...</span>}
        <ArrowDropDown className="absolute inset-y-1 right-0 flex h-8 w-8 items-center" />
      </button>
      {required && (
        <input
          ref={validationRef}
          id={validationId}
          value={value ?? ""}
          onChange={() => {}}
          required
          tabIndex={-1}
          autoComplete="off"
          aria-label={label}
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-0"
        />
      )}
      {open && (
        <ul className="text-secondary bg-lightyellow absolute top-16 z-10 mr-1 max-h-50 w-full overflow-auto rounded-lg border-none shadow-lg">
          {list.map((option) => (
            <li
              key={option}
              onClick={() => {
                onSelectChange(option);
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
