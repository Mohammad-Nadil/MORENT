import React from "react";

const Input = ({ title, type , id , value , children ,onChange}) => {
  return (
    <div className=" flex flex-col gap-y-4 relative">
      <label htmlFor={id} className="font-semibold text-primary-text">
        {title}
      </label>
      <input
        id={id}
        className="py-4 px-8 bg-[#F6F7F9] rounded-xl outline-none "
        type={type}
        placeholder={title}
        value={value}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default Input;

{
  /* <Input title="Your name" type="text" /> */
}
