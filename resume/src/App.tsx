import Contact from "./components/Contact";
import Experience from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import Stack from "./components/Stack";


const App = () => {
  return (
    <div className="bg-[#100e0e] flex min-h-screen w-full subpixel-antialiased">
      <main className="flex-[3]  ">
        <Home />
        <Experience />
        <Stack />
        <Project />
        <Contact />
      </main>
      <Navbar />
    </div>
  );
};

export default App;
