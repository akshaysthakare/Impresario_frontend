import React from "react";

const Footer = () => {
  return (
    <footer className="w-[1380px] h-[300px] border-t border-gray-300 flex justify-between items-center px-20 shadow shadow-[0px_-4px_6px_-1px_rgba(0,0,0,0.1)]">

      <div className="text-xl font-bold px-2">TRAVEL SHOP</div>

      <div className="flex gap-30">
        <div className="w-[228px] h-[188px] flex flex-col gap-5">
          <p className="text-lg font-normal">sit amet</p>
          <p className="text-lg font-normal">ipsum</p>
          <p className="text-lg font-normal">ut labore</p>
          <p className="text-lg font-normal">consectetur</p>
        </div>

        <div className="w-[228px] h-[188px] flex flex-col gap-5">
          <p className="text-lg font-normal">sit amet</p>
          <p className="text-lg font-normal">ipsum</p>
          <p className="text-lg font-normal">ut labore</p>
          <p className="text-lg font-normal">consectetur</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
