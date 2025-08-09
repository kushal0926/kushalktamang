import { FiGithub, FiLinkedin } from "react-icons/fi";


const Links = () => {
  return ( //class="hidden sm:flex items-center justify-center fixed top-10 z-50  px-4 py-3 w-full"
    <div className="hidden sm:flex items-center justify-center fixed top-10 z-50  px-4 py-3 w-full">
        <ul className="flex items-center pl-5 p-5 rounded-2xl bg-[#26282a] text-[#f0efe7] w-fit gap-3">
         <li><a href="https://www.linkedin.com/in/kushal0926/" target="_blank"><FiLinkedin /></a></li>
         <li><a href="https://github.com/kushal0926" target="_blank"><FiGithub /></a></li>
        </ul>
    </div>
    
  );
}

export default Links;
