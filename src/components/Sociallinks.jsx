import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Sociallinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn<FaLinkedin size={30}></FaLinkedin>
        </>
      ),
      href: "https://www.linkedin.com/in/sayed-fahad-048b8a257?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Be8U1tfl8QYKu3xi%2Ff%2BT97A%3D%3D",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub<FaGithub size={30}></FaGithub>
        </>
      ),
      href: "https://github.com/77logan777",
    },
    {
      id: 3,
      child: (
        <>
          Mail<HiOutlineMail size={30}></HiOutlineMail>
        </>
      ),
      href: "mailto:fahad261299@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume<BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, download, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="-blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sociallinks;
