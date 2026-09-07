import React from "react";

type InputProps = {
  id: string;
  label: string;
  type: "text" | "number";
  placeholder: string;
};

function Input({ id, label, type, placeholder }: InputProps) {
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
        maxLength={20}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.target.value;
        }}
        className="bg-lightyellow border-outline/30 focus:border-main text-brown-text h-10 w-full appearance-none rounded-t-xl border-0 border-b p-2 transition-all"
      />
    </div>
  );
}

export default Input;
