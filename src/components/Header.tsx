import React from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="w-screen h-[100px] flex flex-row justify-between align-center">
      <ul className="w-full flex flex-row md:gap-3 items-center justify-center">
        <li>
          <Button asChild>
            <Link to={"/"}>Home</Link>
          </Button>
        </li>
        <li>
          <Button asChild>
            <Link to={"/products"}>Products</Link>
          </Button>
        </li>
        <li>
          <Button asChild>
            <Link to={"/about"}>About</Link>
          </Button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
