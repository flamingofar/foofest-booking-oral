import SingleArea from "./SingleArea/SingleArea";
import { useContext, useEffect } from "react";
import { AvailabilityContext } from "../../../context/Availabilty";
import { OrderContext } from "../../../context/Order";
import { useFormik } from "formik";

import "./Area.scss";
function Area() {
	const { availability } = useContext(AvailabilityContext);
	const { order, setOrder } = useContext(OrderContext);
	const ticketAmount = order.vip + order.regular;

	//Object.values returns an array so we can use reduce method

	const formik = useFormik({
		initialValues: {
			area: "Svartheim",
		},
	});

	useEffect(() => {
		setOrder((prev) => {
			const copy = { ...prev };
			copy.area = formik.values.area;
			return copy;
		});
	}, [formik.values.area]);

	return (
		<section className="section_p">
			<h2>Where do you want to camp?</h2>
			<form>
				<ul>
					{availability.map((area) => {
						return (
							<SingleArea
								key={area.id}
								id={area.id}
								title={area.area}
								spots={area.spots}
								spotsAvai={area.available}
								order={order}
								setOrder={setOrder}
								area={formik}
								availability={availability}
							/>
						);
					})}
				</ul>
			</form>
		</section>
	);
}

export default Area;
