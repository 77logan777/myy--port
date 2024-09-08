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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque magni
          debitis quos, consequuntur tenetur dolorum illo quas ipsa quidem a
          iusto recusandae culpa voluptas alias neque laudantium sequi
          molestias, provident quasi quibusdam vel ullam, quam commodi!
          Doloremque rem sed, facilis in, praesentium at repellat quidem
          voluptatem quam accusamus aperiam consectetur!
        </p>
        <br />
        <p className="text=xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a enim
          incidunt explicabo quasi mollitia, expedita suscipit laudantium
          cupiditate ipsa quia voluptatum doloremque accusantium, est ut, modi
          necessitatibus cumque. Pariatur ad, facilis, hic vel at doloremque,
          quibusdam quam nemo nulla veniam rerum! Inventore sequi aliquam rem
          illum, ullam vitae quidem!
        </p>
      </div>
    </div>
  );
};

export default About;
