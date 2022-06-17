import "./_Tickets.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TentsProvider } from "../../context/Tents";

import Nav from "../Nav/Nav";
import TicketChoice from "./TicketChoice/TicketChoice";
import Area from "./Area/Area";
import Guests from "./Guests/Guests";
import TentOptions from "./TentOptions/TentOptions";
import Basket from "./Basket/Basket";
import InfoPane from "../InfoPane/InfoPane";

function Tickets() {
	//Used for setting tent options and checkout button to be or not disabled
	const [guestsValid, setGuestsValid] = useState(true);

	return (
		<>
			<Nav />
			<main className="tickets-main">
				<InfoPane />
				<section>
					<TentsProvider>
						<TicketChoice />
						<Area />
						<Guests />
						<TentOptions setGuestsValid={setGuestsValid} guestsValid={guestsValid} />
					</TentsProvider>
				</section>
				<Basket setGuestsValid={setGuestsValid} guestsValid={guestsValid}></Basket>
				<Link to={"/checkout"} className={`mobile cta ${guestsValid ? "" : "disabled"}`}>
					Checkout
				</Link>
			</main>
		</>
	);
}

export default Tickets;
