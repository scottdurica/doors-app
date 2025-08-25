import React from "react";

const Input = ({ id, name, type, placeholder, className, value }) => {
    return (
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            className={
                `block w-full rounded-sm bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ` +
                { className }
            }
        />
    );
};

export default Input;
