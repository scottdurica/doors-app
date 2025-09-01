import React from "react";

const InputWithHintRight = ({
    value,
    className = " ",
    id,
    name,
    type,
    hint,
    placeholder,
    inputVal,
    onChange,
}) => {
    return (
        <>
            <div className="flex justify-between mt-3">
                <label
                    className={
                        `block text-xs font-medium text-gray-900 ` + className
                    }
                >
                    {value ? value : children}
                </label>
                <span className="text-xs text-gray-500">{hint}</span>
            </div>
            <div className="mt-0 ">
                <input
                    id={id}
                    value={inputVal}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className="block w-full rounded-sm bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={onChange}
                />
            </div>
        </>
    );
};

export default InputWithHintRight;
