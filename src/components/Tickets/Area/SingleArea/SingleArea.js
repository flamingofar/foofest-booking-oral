import { useEffect, useState } from "react";
import "./_SingleArea.scss";

function SingleArea({ title, spots, spotsAvai, order, setOrder, area, id, availability }) {
	const [available, setAvailable] = useState(true);

	useEffect(() => {
		const area = availability.filter((area) => area.id === id);
		const checkAvailability = () =>
			area[0].available <= order.guests.length ? setAvailable(false) : setAvailable(true);
		checkAvailability();
	}, [JSON.stringify(order.guests)]);

	return (
		<li className="single_area">
			<div>
				<input
					className="radio"
					type="radio"
					id={title}
					name="area"
					onChange={area.handleChange}
					value={title}
					defaultChecked={title === "Svartheim" ? true : false}
					disabled={available ? false : true}
				/>
				<label className="radio_label" htmlFor={title}>
					<strong>{title}</strong>
				</label>
				<span>
					Available Spots: {spotsAvai}/{spots}
				</span>
			</div>
		</li>
	);
}

export default SingleArea;
