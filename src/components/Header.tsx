import React from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faHome,
  faInfo,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="w-full h-[50px] flex flex-row items-end font-sans">
      <ul className="w-full flex flex-row md:gap-3 items-center justify-center">
        <li>
          <Button asChild>
            <Link
              to={"/"}
              className="hover:underline transition ease-in-out duration-1500"
            >
              <FontAwesomeIcon icon={faHome} />
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
              <FontAwesomeIcon icon={faBook} />
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
              <FontAwesomeIcon icon={faInfoCircle} />
              About
            </Link>
          </Button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
