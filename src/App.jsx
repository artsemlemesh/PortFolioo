import React from "react";
import AuroraBackground from "./components/AuroraBackground";
import LayoutGrid from "./components/TilesProjects";
import {
  TextRevealCard
} from "./components/TextRevealCard";
import TextGenerateEffect from "./components/TextEffect";
import { Button } from "./components/Button";
import MySkills from "./components/MySkills";
import { LinkPreviewDemo } from "./components/ContactMeComp";
import { FaArrowLeft } from "react-icons/fa";

import {
  SkeletonOne,
  SkeletonTwo,
  SkeletonThree,
  SkeletonFour,
} from "./components/skeletons/Skeleton";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "1.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: 'shop.png'
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: 'crypto.png'
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const words = `
Hi there! I’m a full stack developer passionate about building web applications that are both functional and visually appealing. 
With a strong foundation in React and Django, I enjoy working on both the front-end and back-end, creating seamless user experiences. 
My journey in tech is driven by curiosity and a love for problem-solving, which constantly motivates me to learn and adapt. 
I take pride in turning complex ideas into simple, efficient solutions and writing clean, maintainable code. 
For instance, I once spent a week troubleshooting a Docker container issue, dedicating over 35 hours before finding a simple but tricky solution. 
Whether designing responsive interfaces or developing robust APIs, I aim to deliver quality work that makes a difference. 
I believe in teamwork and enjoy collaborating to bring ideas to life.

Outside of coding, I love adventure travel and am always looking for new experiences and challenges. 
I’m open-minded and eager to embrace whatever comes my way, both professionally and personally. 
Exploring new cultures and trying different activities keeps me creative and inspired in my work.
`;



function App() {
  const navigate = useNavigate()
  return (
    <div className="flex h-screen  overflow-hidden relative justify-center ">
      {/* Left Static Side */}
      <AuroraBackground>
        <div className="w-1/2 text-black flex flex-col items-center justify-center p-8 min-w-[350px]">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg mb-8">
            Hi, I'm Artsem, a Full Stack Developer with a passion for
            creating amazing web applications.
          </p>

          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            onClick={()=> navigate('/email')}
         >
            Contact Me
          </Button>
        </div>
        <LayoutGrid cards={cards} />
      </AuroraBackground>

      {/* Right Scrollable Side */}
      <div className="w-1/2 bg-gray-100 overflow-y-scroll  relative min-w-[350px]">
        <div className="min-h-screen   p-8 flex items-center justify-center ">
          <div>
            <h2 className="text-2xl font-bold mb-2">About Me</h2>

            <TextGenerateEffect words={words} />
          </div>
        </div>

        <div className="min-h-screen p-8 flex items-center justify-center ">
          <FaArrowLeft size={40} />
          <TextRevealCard text="Look!" revealText="at my projects" />
        </div>


        <MySkills />

        <div className="container mx-auto p-8 items-center justify-center">
          <LinkPreviewDemo />
        </div>
      </div>
    </div>
  );
}

export default App;
