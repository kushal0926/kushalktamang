import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="flex min-h-screen p-10 items-center justify-center text-[#949494]"
      >
        <div className="flex flex-col gap-8 p-5 text-center ">
          <div className=" text-left">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.8 }}
              src="animeProfile.svg"
              alt="my-picture"
              className="border-animation  object-cover mb-7"
            />
            <div className="max-w[700px] space-y-5 sm:space-y-7">
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
              className="text-3xl "
            >
              I'm a passionate <span>Full-Stack Web Developer</span>. I specialize in building scalable, high-performance <span>web applications</span> with a strong focus on usability, efficiency, and <span>seamless user experiences.</span>
            </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
