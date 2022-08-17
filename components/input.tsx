import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  name: string;
  label: string;
  kind?: "text" | "phone" | "email" | "price";
  type: string;
  register: UseFormRegisterReturn;
  required?: boolean;
  // [key: string]: any;
}

export default function Input({
  name,
  label,
  kind = "text",
  type,
  register,
  required = false,
}: IInputProps) {
  return (
    <div>
      {label ? (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      ) : null}
      <div className="mt-1">
        {kind === "text" ? (
          <div className="flex rounded-md shadow-sm ">
            <input
              id={name}
              required={required}
              {...register}
              type={type}
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        ) : null}
        {kind === "phone" ? (
          <div className="flex rounded-md shadow-sm ">
            <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm shadow-sm">
              +82
            </span>
            <input
              id={name}
              required={required}
              {...register}
              type={type}
              className="appearance-none w-full px-3 py-2 border rounded-l-none border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        ) : null}
        {kind === "price" ? (
          <div className="rounded-md relative flex items-center shadow-sm">
            <div className="absolute left-0 pointer-events-none pl-3 flex items-center justify-center">
              <span className="text-gray-500 text-sm">$</span>
            </div>
            <input
              id={name}
              required={required}
              {...register}
              type={type}
              className="appearance-none pl-7 pr-14 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
            <div className="absolute right-0 pointer-events-none pr-3 flex items-center">
              <span className="text-gray-500">USD</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
