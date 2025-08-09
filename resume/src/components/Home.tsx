import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="flex min-h-screen w-full items-center justify-center"
      >
        <div className="flex flex-col gap-8 p-5 text-center">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="./profile.JPG"
            alt="profile-picture"
            className="border-animation w-[150px] sm:w-[150px]"
          />

          <div className="space-y-1 sm:space-y-3 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, ease: "easeOut" }}
              className="text-[#1c1c1c] text-4xl font-semibold md:text-5xl lg:text-6xl"
            >
              Hey, I'm Kushal.
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, ease: "easeOut" }}
              className="text-[#1c1c1c] text-xl font-semibold md:text-2xl lg:text-3xl"
            >
              Full Stack Developer.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="max-w-[500px] text-lg text-gray-700"
            >
              I’m a full-stack developer who designs and codes. Most designers
              can't code while Most developers can't design. I do both. Turning
              your ideas into profitable products.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
