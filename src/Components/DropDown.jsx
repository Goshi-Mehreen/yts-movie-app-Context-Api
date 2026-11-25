import React from "react";

function Dropdown({ label, name, options, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-medium text-lg">
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-zinc-900 text-white border border-gray-600 rounded-lg px-3 py-2"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
