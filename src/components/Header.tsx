import React from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="w-screen h-[50px] flex flex-row items-end bg-red-100">
      <ul className="w-full flex flex-row md:gap-3 items-center justify-center">
        <li>
          <Button asChild>
            <Link
              to={"/"}
              className="hover:underline transition ease-in-out duration-15"
            >
              Home
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild>
            <Link
              to={"/products"}
              className="hover:underline transition ease-in-out duration-15"
            >
              Products
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild>
            <Link
              to={"/about"}
              className="hover:underline transition ease-in-out duration-15"
            >
              About
            </Link>
          </Button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
