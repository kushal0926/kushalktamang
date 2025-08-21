const Experience = () => {
  return (
    <>
      {/* colors to choose #1c1c1c -black  */}
      <div
        id="about"
        className=" flex flex-col min-h-screen w-full items-center justify-center gap-4 "
      >
        <div className="max-w-[700px] space-y-5 md:space-y-5 text-[#949494]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#f0efe7]">
            About
          </h1>
          <p className="text-3xl">
            <span>Here's what I actually do:</span> I take your{" "}
            <span>ideas</span> and <span>create</span> it into not just a{" "}
            <span>create</span> site but a <span>full functional app</span> that
            the users can interact with.{" "}
          </p>
          <p className="text-3xl">
            When I'm not <span>coding</span>, I'm <span>drawing</span> or{" "}
            <span>watching anime/tv-shows. </span>
            <span>Espresso</span> over <span>cappuccino</span>, always.
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;
