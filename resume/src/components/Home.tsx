

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="flex min-h-screen w-full items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
          <img
            src="/profile-picture.jpg"
            alt="profile-picture"
            className="border-animation w-[200px] sm:w-[200px] rounded-full"
          />

          <div className="space-y-1 sm:space-y-3">
            <h1 className="text-[#26282A] text-4xl font-semibold md:text-5xl lg:text-6xl">
              Hey, I'm Kushal.
            </h1>
            <h3 className="text-[#26282A] text-xl font-semibold md:text-2xl lg:text-3xl">Full Stack Developer.</h3>
            <p className="max-w-[500px] text-sm text-gray-500">
              I’m currently learning full-stack development, diving into both
              front-end and back-end technologies to build comprehensive web
              solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
