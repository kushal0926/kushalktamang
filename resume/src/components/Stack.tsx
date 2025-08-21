// import React from 'react';

import { RiNextjsFill } from "react-icons/ri";

const Stack = () => {
  return (
    <div className="text-[#e0efe7] flex flex-col items-center mt-10">
      <h1>Development Stack</h1>
      <p className="text-[#949494]">
        All of the tools, and services I use to build my projects.
      </p>

      <div>
        <h2>Languages/Frameworks</h2>
        <div>
          <RiNextjsFill className="w-28 h-28" />{" "}
          <p>
            I use Next as the frontend for all of my projects. Its server-side
            capabilites make it great for SEO and with small apps a separate
            backend may not be necessary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stack;
