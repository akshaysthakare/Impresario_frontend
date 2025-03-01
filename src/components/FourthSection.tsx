import React from "react";

const FourthSection: React.FC = () => {
  return (
    <section className="w-100% h-[536px] flex flex-row items-center justify-between px-[72px] mt-[30px]">
      {/* Left Container */}
      <div className="w-[526px] h-[408px] flex flex-col justify-between">
        <h2 className="text-[50px] font-bold leading-[87.17px] tracking-[-1.5%] font-[Noto Sans] text-black">
          Lorem ipsum <span className="text-[#EC1380]">dolor</span>
        </h2>
        <button className="w-[160px] h-[56px] bg-[#EC1380] text-white font-bold text-[16px] rounded-full">
          sit amet
        </button>
      </div>

      {/* Right Container */}
      <div className="w-[746px] h-[408px] flex flex-col gap-[24px]">
        <div className="flex gap-[24px]">
          {/* Box 1 */}
          <div className="w-[361px] h-[192px] bg-[#FDECF5] rounded-[16px] p-[16px] flex flex-col">
            <span className="text-[#EC1380] text-[48px] font-bold">01</span>
            <p className="text-black text-[32px] font-normal">Sit Amet</p>
          </div>

          {/* Box 2 */}
          <div className="w-[361px] h-[192px] bg-[#FDECF5] rounded-[16px] p-[16px] flex flex-col">
            <span className="text-[#EC1380] text-[48px] font-bold">02</span>
            <p className="text-[32px]">
              <span className="text-[#EC1380] font-bold">Lorem</span> Ipsum Dolor Sit Amet
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="w-[746px] h-[192px] bg-[#FDECF5] rounded-[16px] p-[16px] flex flex-col">
          <span className="text-[#EC1380] text-[48px] font-bold">03</span>
          <p className="text-[32px] text-black">
            Consectetur <span className="text-[#EC1380] font-bold">Adipiscing</span> Elit, Ut Labore Et Dolore
          </p>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
