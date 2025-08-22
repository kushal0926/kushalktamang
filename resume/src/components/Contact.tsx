import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className=" flex flex-col min-h-screen w-full items-center justify-center gap-4 "
      >
        <div className="max-w-[700px] space-y-5 md:space-y-5 text-[#949494]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#f0efe7]">
            Turning Ideas into Impact
          </h1>
          <p className="text-small">
            Have an exciting idea brewing? Or maybe you're looking to
            brainstorm, collaborate, or just talk tech? I'm always up for
            meaningful conversations—let's make it happen!
          </p>
        </div>

        {/* links */}
        <div className="flex flex-col text-[#949494] ">
          <div>
            <ul className="flex gap-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/kushal0926/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-10 h-10 hover:text-[#00416A] transition-colors duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kushal0926"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithubSquare className="w-10 h-10 hover:text-[#00416A] transition-colors duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:kushaltamang0926@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                >
                  <MdOutgoingMail className="w-10 h-10 hover:text-[#00416A] transition-colors duration-300" />
                </a>
              </li>
              <li className="mt-2 text-sm">
                <a
                  href="mailto:kushaltamang0926@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  or mail to{" "}
                  <span className="font-medium">
                    kushaltamang0926@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
