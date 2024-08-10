import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  const Links = [
    { title: "Home", link: "/" },
    { title: "Contact", link: "/contact" },
    { title: "Quotes" },
    { title: "About us" },
  ];

  return (
    <>
      <nav className="bg-gray-800 p-4 ">
        <ul className="flex space-x-4">
          {Links.map((elem, index) => (
            <Link
              key={index}
              to={elem.link}
              className="text-white hover:text-gray-300"
            >
              {elem.title}
            </Link>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
