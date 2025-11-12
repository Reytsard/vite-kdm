import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="h-[70px] pt-2 w-full flex items-center justify-around bg-gray-100 text-gray-700 text-sm">
      <div>
        <ul className="flex h-full w-full flex-col items-start">
          <li>
            <Link to={"/"}>Facebook</Link>
          </li>
          <li>
            <Link to={"/"}>Instagram</Link>
          </li>
          <li>
            <Link to={"/"}>AIA</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex h-full w-full flex-col items-start">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Products</Link>
          </li>
          <li>
            <Link to={"/"}>About</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
