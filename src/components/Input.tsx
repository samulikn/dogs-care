import React from "react";

type InputProps = {
  id: string;
  label: string;
  type: "text" | "number";
  placeholder: string;
  required?: boolean;
  value?: string | undefined;
  onValueChange?: (value: string) => void;
};

function Input({
  id,
  label,
  type,
  placeholder,
  required = false,
  value,
  onValueChange,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label
        className="text-secondary m-0 ml-1 text-sm font-semibold"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value ?? ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onValueChange?.(e.target.value)
        }
        className="bg-lightyellow border-outline/30 focus:border-main text-brown-text h-10 w-full appearance-none rounded-t-xl border-0 border-b p-2 transition-all"
      />
    </div>
  );
}

export default Input;
