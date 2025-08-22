import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen w-full p-5 sm:p-10 items-center justify-center text-[#949494]"
    >
      <div className="flex flex-col items-center gap-8 p-5 text-center">
        {/* Profile Image */}
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          src="animeProfile.svg"
          alt="my-picture"
          className="border-animation object-cover mb-5 w-32 sm:w-40 md:w-52 lg:w-64"
        />

        {/* Text */}
        <div className="space-y-4 sm:space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold"
          >
            Hey, I'm <span className="text-[#f0efe7]">Kushal</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-left max-w-2xl mx-auto"
          >
            I'm a passionate{" "}
            <span className="text-[#f0efe7] font-medium">
              Full-Stack Web Developer
            </span>
            . I specialize in building{" "}
            <span className="text-[#f0efe7] font-medium">
              scalable, high-performance
            </span>{" "}
            web applications with a strong focus on{" "}
            <span className="text-[#f0efe7] font-medium">
              usability, efficiency
            </span>
            , and{" "}
            <span className="text-[#f0efe7] font-medium">
              seamless user experiences
            </span>
            .
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Home;
