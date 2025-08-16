const Experience = () => {
  return (
    <>
    {/* colors to choose #1c1c1c -black  */}
      <div
        id="about"
        className=" flex flex-col min-h-screen w-full items-center justify-center gap-4"
      > 
        <div className="max-w-[500px] space-y-5 md:space-y-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#f0efe7]">About</h1>
          <h2 className="text-2xl text-[#f0efe7]" >I'm Kushal. Software Engineer born in Nepal. </h2>
          <p className="text-gray-600">
            <span className="text-[#26281a]">Here's what I actually do:</span> I take your ideas and create
            it into not just a preety site but a full functional app that the
            users can interact with.{" "}
          </p>
          <p className="text-gray-600">When I'm not coding, I'm drawing or watching anime/tv-shows. Espresso over cappuccino, always.</p>
        </div>
      </div>
    </>
  );
};

export default Experience;
