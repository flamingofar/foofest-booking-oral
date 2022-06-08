import { useContext, useEffect, useState } from "react";
import { AvailabilityContext } from "../../context/Availabilty";

import LineUp from "./LineUp/LineUp";
import TicketInfo from "./TicketInfo/TicketInfo";
import InfoAside from "./InfoAside/InfoAside";
import Nav from "../Nav/Nav";

import "./_Landing.scss";

function Landing() {
	const { availability, setAvailability } = useContext(AvailabilityContext);
	const [lineUp, setLineUp] = useState([]);

	useEffect(() => {
		const getAvailability = async () => {
			const JSON = await fetch("https://foofest-bananas.herokuapp.com/available-spots");
			const spotsData = await JSON.json();
			const spots = await spotsData.map((spot, idx) => ({ ...spot, id: idx + 1 }));

			setAvailability(spots);
		};
		getAvailability();

		const getLineup = async () => {
			const JSON = await fetch("https://foofest-bananas.herokuapp.com/bands");
			const bandsData = await JSON.json();
			const bands = await bandsData;

			setLineUp(bands);
		};

		getLineup();
	}, []);

	return (
		<>
			<Nav />
			<main className="landing">
				<TicketInfo />
				<LineUp lineUp={lineUp} />
				<InfoAside />
			</main>
		</>
	);
}

export default Landing;
