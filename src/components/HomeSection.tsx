import React from "react";

const HomeSection: React.FC = () => {
  return (
    <div className="relative mt-[68px]">
      {/* Background Image */}
      <div className="relative w-full h-[600px]">
        <img
          src="https://s3-alpha-sig.figma.com/img/91c5/3ecf/be95e50801c5d90c38f68aac99c34402?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MeT8bce4C0R8~5dNkcnnivkvolWpMTTwuv~kZBbNrro86o1kBUor2Zx~TkjZdfXYHWVOQRkeh8d2OJMtYlhLbwKOtU3YyLuG0KRshHLyv4f9BYCYYodID3cf6MtQCQkorhapZKZ3Ioq2xCrwlE0KOtbsV3JcIruNBKVFdHFrOJah-Eu0sa7aYOcmSZiDLb-0NadOksyoVmKrXcTyXQroFaNv5aNkfK1oTdwMkXnTZMbKWUEo2SgKt5tIrm~J3~2IsQuBEfDdcB0Lp~y0u4yMs5yM2j3Ue-XbDozTqk1SxnvAF3ywzZtgmWiuFAro7KrFJ8t8dfe1Q71rIVDrEZJmLg__" 
          alt="Background"
          className="w-full h-full object-cover opacity-120"
        />
        {/* Text Content */}
        <div className="absolute top-[168px] left-[72px] text-white">
          <h1 className="text-3xl font-bold w-[846px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </h1>
          <p className="w-[619px] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          {/* Button */}
          <button className="mt-6 bg-pink-500 text-white text-lg font-semibold px-6 py-3 rounded-full">
            Start Curating
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
