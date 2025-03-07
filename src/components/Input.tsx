import React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
  }
  const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => {
    return (
        <div className="w-full">
          {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
          <input
            className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
              error ? "border-red-500" : "border-gray-300"
            } ${className}`}
            {...props}
          />
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
      );
}

export default Input;