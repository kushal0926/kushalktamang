import { BiBriefcase, BiCode, BiHome, BiMailSend } from "react-icons/bi";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";


const HeaderRight = () => {
  return (
    <div className="flex-[1]">
      <div className="h-screen top-0 hidden md:sticky md:flex flex-col items-center justify-between bg-[#26282A] text-[#F0EFE7]">
        <ul
         className="flex flex-col gap-5 mt-[30vh]">
          {["home", "about", "projects", "contact"].map((item) => (
            <li
              key={item}
              className="flex items-center justify-start font-medium transition-all duration-200 group sm:text-lg md:text-xl xl:text-3xl gap-x-3 cursor-pointer"
            >
              <a
                href={`#${item}`}
                className="transition-all duration-200 hover:translate-x-3"
              >
                {item}
              </a>
              <FaLongArrowAltLeft className="text-3xl opacity-0 -translate-x-3 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
            </li>
          ))}
        </ul>

   {/* Social links at bottom */}
        <ul className="flex gap-6 mb-10 mr-[5vw]">
          <li>
            <a
              href="https://github.com/kushal0926"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[#0a66c2] transition-colors"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kushal0926/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[#0a66c2] transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </li>
        </ul>

      </div>

      {/* ----------------------for mobile devices------------------------- */}
      <div className="fixed p-3 left-0 right-0 top-0 z-0 flex justify-evenly bg-[#26282A] text-[#F0EFE7] md:hidden">
        {/* ------------home--------- */}
        <a href="#home" className="flex flex-col items-center justify-center">
          <BiHome className="text-2xl" />
          <span className="text-xs">Home</span>
        </a>
        {/* ------------about--------- */}
        <a href="#about" className="flex flex-col items-center justify-center">
          <BiBriefcase className="text-2xl" />
          <span className="text-xs">About</span>
        </a>
        {/* ------------projects--------- */}
        <a
          href="#projects"
          className="flex flex-col items-center justify-center"
        >
          <BiCode className="text-2xl" />
          <span className="text-xs">Projects</span>
        </a>
        {/* ------------contact--------- */}
        <a
          href="#contact"
          className="flex flex-col items-center justify-center"
        >
          <BiMailSend className="text-2xl" />
          <span className="text-xs">Contact</span>
        </a>
      </div>
    </div>
  );
};

export default HeaderRight;
