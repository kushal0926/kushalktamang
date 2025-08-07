import Contact from "./components/Contact";
import Experience from "./components/About";
import HeaderRight from "./components/HeaderRight";
import Home from "./components/Home";
import Project from "./components/Project";

const App = () => {
  return (
    <div className="flex min-h-screen w-full subpixel-antialiased">
      <main className="flex-[3] ">
        <Home />
        <Experience />
        <Project />
        <Contact />
      </main>
      <HeaderRight
       />
    </div>
  );
};

export default App;
