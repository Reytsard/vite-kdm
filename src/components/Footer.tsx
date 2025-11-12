import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import {
  faBook,
  faEnvelope,
  faHome,
  faList,
  faPenSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="h-[70px] pt-2 w-full flex items-center justify-center gap-5 text-gray-700 text-sm">
      <div>
        <ul className="flex h-full w-full flex-col items-start">
          <li>
            <Link to={"/"}>
              <FontAwesomeIcon icon={faFacebook} />
              Facebook
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
            <Link to={"/"}>Instagram</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faList} />
            <Link to={"/"}>AIA</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex h-full w-full flex-col items-start">
          <li>
            <FontAwesomeIcon icon={faHome} />
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faBook} />
            <Link to={"/"}>Products</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faPenSquare} />
            <Link to={"/"}>About</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
