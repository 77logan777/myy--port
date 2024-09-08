import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          "As a passionate and dedicated web developer, I specialize in crafting
          dynamic and responsive websites that provide exceptional user
          experiences. With a strong foundation in front-end and back-end
          technologies, I am committed to bringing innovative ideas to life and
          solving complex problems through code."
        </p>
        <br />
        <p className="text=xl">
          "Web development is not just my profession; it's my passion. I thrive
          in environments where creativity meets technical challenges, and I
          take pride in delivering solutions that make a tangible impact.
          Whether it's a small business website or a large-scale web
          application, I am dedicated to achieving excellence in every project I
          undertake."
        </p>
      </div>
    </div>
  );
};

export default About;
