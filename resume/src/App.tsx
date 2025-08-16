import Contact from "./components/Contact";
import Experience from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";

const App = () => {
  return (

    <div className="flex min-h-screen w-full subpixel-antialiased bg-[#f0efe7]">
      <Navbar/>
      <main className="flex-[3] bg-[#100e0e] ">
        
        <Home />
        <Experience />
        <Project />
        <Contact />
      </main>
      
    </div>
  );
};

export default App;
