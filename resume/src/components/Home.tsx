import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="flex min-h-screen w-full items-center justify-center text-[#949494]"
      >
        <div className="flex flex-col gap-8 p-5 text-center">
          <div className="space-y-1 sm:space-y-3 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, ease: "easeOut" }}
              className=" text-4xl font-semibold md:text-5xl lg:text-6xl"
            >
              Hey, I'm <span className="text-[#f0efe7]">Kushal</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="max-w-[500px] text-lg "
            >
              I’m a <span className="text-[#f0efe7]">Full-Stack Developer</span> who designs and codes. Most designers
              can't <span className="text-[#f0efe7]">code</span> while most developers can't <span className="text-[#f0efe7]">design</span>. I do both. Turning
              your ideas into profitable products.
            </motion.p>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Home;
