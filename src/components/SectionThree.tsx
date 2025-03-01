import React from "react";

const icons = [
  "../assets/icons/Vector.png",
  "../assets/icons/icon2.png",
  "../assets/icons/icon3.png",
];

const ThirdSection: React.FC = () => {
  return (
    <section
      className="relative w-full  h-[448px] bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/9d71/50fe/c8e7a3a23184f42ca634bdba366fdda4?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CdzcZyWsMPqfP~dXQUlJF~Yr3dcKJWMk73~KV5ZpipcoBl~lobjT99acfyr9cNooWeuBK6Mrafc4XlzQsHX8oI2bJwWBb8g2CeWBy-ij0DcGAWkmtl7G5U1FQiPiqf2-eVY9gCv6bHEmW4ci7DvBlZKNRiSa6fDlQlg~3BbLyK7KmQwCBDOfXtkBVovMLGFYhu~ENz~fHQz8xhi~eZgMx3VsWFkvtDuElvafLG0y~wBivogQghHM5IPXAe~hUDLGDopN2A~Ix264CIJH5a~kCqLo-jaJhIinSVInG1~JtmoVYzIYZpUuDGwF7F9lD3AtEQP6o6NtAJzK6VGZNJJ1tg__')",
      }}
    >
      {/* Title */}
      <h2 className="text-[#EC1380] font-bold text-[48px] leading-[56px] text-center">
        Lorem ipsum dolor sit amet
      </h2>

      <div className="flex justify-center gap-6 mt-8">
        {icons.map((iconSrc, index) => (
          <div
            key={index}
            className="group w-[273px] h-[200px] bg-white rounded-[24px] p-6 flex flex-col items-center justify-center transition-all duration-300 hover:bg-[#EC1380] shadow-lg"
          >

            <img src={iconSrc} alt={`Icon ${index + 1}`} width={80} height={80} className="transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert" />

            <p className="text-center text-[24px] leading-[32px] text-black transition-all duration-300 group-hover:text-white">
              Lorem <span className="font-bold">ipsum</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThirdSection;
