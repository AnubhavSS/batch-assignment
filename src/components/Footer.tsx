import Image from "next/image";
import fb from "../../public/fb.png";
import insta from "../../public/Vector.png";
import twitter from "../../public/Group.png";
import linkedin from "../../public/Linkedin.png";
const Footer = () => {
  return (
    <div className="relative min-h-[45vh] ">
    {/* Other content of the page */}
    
    {/* Footer component */}
    <div className="absolute bottom-0 w-full">
      <div className="w-full h-[182px] bg-white flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center gap-8 ">
          <Image src={fb} alt="fb" width={30} height={30} />
          <Image src={insta} alt="insta" width={30} height={30} />
          <Image src={twitter} alt="twitter" width={30} height={30} />
          <Image src={linkedin} alt="linkedin" width={30} height={30} />
        </div>
        <p className="text-[14px] font-normal">Copyright ©2020 All rights reserved </p>
      </div>
    </div>
  </div>
  );
};

export default Footer;
