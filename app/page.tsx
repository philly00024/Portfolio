import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Photo from "@/components/Photo"

 const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
  <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
    {/*text*/}
    <div className="text-center xl:text-left">
    <span>Software Developer</span>
    <h1 className="h1">
      Hello I'm <br /> <span>Henock Beauvoir</span>
      </h1>
      <p className="max-w-[500px] mb-9 text-white/80">
      I'm a software developer with a passion for building innovative and user-friendly applications. With a strong
      foundation in computer science and a keen eye for design, I'm always looking for ways to improve
      the user experience and push the boundaries of what's possible.
      </p>
      <div className="flex flex-col xl:fiex-row items-senter gap-8">
      <Button>
        <span>Download CV</span>
        <FiDownload className="ml-2" />

       
        
      </Button>
      </div>
      </div>
      {/*photo*/}
    <div className="order-1 xl:order-none mb-8 xl:mb-0">
      <Photo />
    </div>
    </div>
    </div>
    </section>
  );
 };

  export default Home;
