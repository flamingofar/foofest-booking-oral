import { Link } from "react-router-dom";
import "./_Nav.scss";

function Nav() {
	return (
		<nav>
			<Link to={"/"}>FOOFEST</Link>
			<p className="date">21.06.2022 - 26.06.2022</p>
		</nav>
	);
}

export default Nav;
