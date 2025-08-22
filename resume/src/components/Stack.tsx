import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3, FaNodeJs, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiHtml5, SiMongodb, SiTailwindcss } from "react-icons/si";

const Stack = () => {
  return (
    <section
      id="stack"
      className="flex min-h-screen w-full items-center justify-center p-6"
    >
      <div className="max-w-[700px] space-y-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#f0efe7]">
          My Tech Stack
        </h1>

        <ul className="flex flex-wrap justify-center gap-6 text-[#949494]">
          <li>
            <SiHtml5 className="w-16 h-16 text-[#F54927] hover:scale-110 transition-transform duration-300" />
          </li>
          <li>
            <FaCss3 className="w-16 h-16 text-[#00416A] hover:scale-110 transition-transform duration-300" />
          </li>
          <li>
            <RiJavascriptFill className="w-16 h-16 text-amber-300 hover:scale-110 transition-transform duration-300" />
          </li>
          <li>
            <BiLogoTypescript className="w-16 h-16 text-blue-500 hover:scale-110 transition-transform duration-300" />
          </li>
          <li>
            <FaReact className="w-16 h-16 text-blue-400 hover:scale-110 transition-transform duration-300" />
          </li>
          <li>
            <FaNodeJs className="w-16 h-16 text-green-400 hover:scale-110 transition-transform duration-300" />
          </li>
          <li>
            <SiExpress className="w-16 h-16 hover:scale-110 transition-transform duration-300" />
          </li>
          <li>
            <SiMongodb className="w-16 h-16 text-green-600 hover:scale-110 transition-transform duration-300" />
          </li>
          <li>
            <SiTailwindcss className="w-16 h-16 text-blue-700 hover:scale-110 transition-transform duration-300" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Stack;
