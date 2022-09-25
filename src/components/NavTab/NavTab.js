import "./NavTab.css";
import { Link } from "react-scroll";

function NavTab() {
  return (
    <Link
      to="about-projects"
      className="nav-tab"
      spy={false}
      smooth={true}
      offset={0}
      duration={700}
    >
      Узнать больше
    </Link>
  );
}

export default NavTab;
