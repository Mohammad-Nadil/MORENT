import React from "react";

const Input = ({ title, type , id , value , children ,onChange, name , className}) => {
  return (
    <div className=" w-full md:w-auto flex flex-col gap-y-4 relative">
      <label htmlFor={id} className="font-semibold text-primary-text">
        {title}
      </label>
      <input
        id={id}
        className={`py-4 px-8 bg-[#F6F7F9] rounded-xl outline-none ${className}`}
        type={type}
        placeholder={title}
        value={value}
        onChange={onChange}
        name={name}
      />
      {children}
    </div>
  );
};

export default Input;

{
  /* <Input title="Your name" type="text" /> */
}
