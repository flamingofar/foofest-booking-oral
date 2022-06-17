import "./_TicketChoice.scss";
import { useContext } from "react";
import { OrderContext } from "../../../context/Order";
import { v4 as uuidv4 } from "uuid";

function TicketChoice() {
	const { order, setOrder } = useContext(OrderContext);

	const handleRegular = (e) => {
		const guests = order.guests;

		if (e.target.innerHTML === "-") {
			if (order.regular !== 0) {
				// Removes 1  regular ticket in order state
				setOrder((prev) => ({ ...prev, regular: prev.regular - 1 }));
				// Removes 1 instance of a regular guest to order state
				setOrder((prev) => {
					// Making a copy of the guests state array to manipulate
					const orderCopy = {
						...prev,
					};
					const arr = orderCopy.guests;
					const toRemove = arr.findIndex((guest) => !guest.vip);

					//Remove a regular ticket from first occurance
					arr.splice(toRemove, 1);

					// Returning the copy array as state
					return orderCopy;
				});
			}
		} else if (e.target.innerHTML === "+") {
			// Adds 1 to regular tickets in order state
			setOrder((prev) => ({ ...prev, regular: prev.regular + 1 }));
			// Adds 1 instance of a guest to order state
			setOrder((prev) => ({
				...prev,
				guests: [...guests, { id: uuidv4(), name: "", email: "", vip: false }],
			}));
		}
	};
	const handleVIP = (e) => {
		switch (e.target.innerHTML) {
			case "-":
				if (order.vip !== 0) {
					// Removes 1  VIP ticket in order state
					setOrder((prev) => ({ ...prev, vip: prev.vip - 1 }));
					// Removes 1 instance of a VIP guest to order state
					setOrder((prev) => {
						// Making a copy of the guests state array to manipulate
						const orderCopy = {
							...prev,
						};
						const toRemove = orderCopy.guests.findIndex((guest) => guest.vip);

						//Remove last element in the guest array
						orderCopy.guests.splice(toRemove, 1);

						// Returning the copy array as state
						console.log(orderCopy);
						return orderCopy;
					});
				}
				break;
			case "+":
				const guests = order.guests;
				// Adds 1 to VIP ticket in order state
				setOrder((prev) => ({ ...prev, vip: prev.vip + 1 }));
				// Adds 1 instance of a VIP guest to order state
				setOrder((prev) => ({
					...prev,
					guests: [...guests, { id: uuidv4(), name: "", email: "", vip: true }],
				}));

				break;
			default:
				break;
		}
	};

	return (
		<section className="ticket_choice">
			<h2>Which ticket do you want?</h2>
			<div>
				<div>
					<div>
						<button className="choice_btn" onClick={handleRegular}>
							-
						</button>
						<p className="ticket_number">{order.regular}</p>
						<button className="choice_btn" onClick={handleRegular}>
							+
						</button>
					</div>
					<div>
						<p>
							<strong>Regular ticket</strong>
						</p>
					</div>
				</div>
				<div>
					<div>
						<button className="choice_btn" onClick={handleVIP}>
							-
						</button>
						<p className="ticket_number">{order.vip}</p>
						<button className="choice_btn" onClick={handleVIP}>
							+
						</button>
					</div>
					<div>
						<p>
							<strong>VIP ticket</strong>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TicketChoice;
