import Link from 'next/link';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        
        {/* Message */}
        <p className="text-center text-white text-9sm  mb-9">
          💖  Thank you for visiting my website! I would love to connect with you!  💖
        </p>

        {/* Separator Line */}
        <hr className="border-t border-[#353951] mb-4" />

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by{' '}
            <Link href="https://www.linkedin.com/in/liacode/" target="_blank" className="text-[#16f2b3]">
              Olga Nazarova
            </Link>
          </p>
          
          {/* Contact Icons */}
          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/liacoding"
              target="_blank"
              className="text-pink-500 transition-all hover:scale-125 duration-300"
            >
              <BsGithub size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/olganazarova"
              target="_blank"
              className="text-pink-500 transition-all hover:scale-125 duration-300"
            >
              <BsLinkedin size={24} />
            </Link>
           
            <Link
              href="https://leetcode.com/olganazarova"
              target="_blank"
              className="text-pink-500 transition-all hover:scale-125 duration-300"
            >
              <SiLeetcode size={24} />
            </Link>
   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

