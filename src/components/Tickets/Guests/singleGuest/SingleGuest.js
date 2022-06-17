import { useContext, useEffect } from "react";
import { OrderContext } from "../../../../context/Order";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./_SingleGuest.scss";
import "../../../../styles/shared/_textinput.scss";
function SingleGuest({ number, ticket, id }) {
	const guest = useFormik({
		initialValues: {
			name: "",
			email: "",
		},
		validationSchema: Yup.object({
			name: Yup.string().min(5, "Please fill in full name").required("Full name is required"),
			email: Yup.string().email().required("Required"),
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
		validateOnMount: true,
	});

	const { order, setOrder } = useContext(OrderContext);
	const guestIdx = order.guests.findIndex((guest) => guest.id === id);

	useEffect(() => {
		const handleNameInput = () => {
			setOrder((prev) => {
				const newOrder = { ...prev };

				newOrder.guests[guestIdx] = { ...newOrder.guests[guestIdx], name: guest.values.name };

				return newOrder;
			});
		};
		handleNameInput();
	}, [guest.values.name]);

	useEffect(() => {
		const handleEmailInput = () => {
			setOrder((prev) => {
				const newOrder = { ...prev };

				newOrder.guests[guestIdx] = { ...newOrder.guests[guestIdx], email: guest.values.email };

				return newOrder;
			});
		};
		handleEmailInput();
	}, [guest.values.email]);

	useEffect(() => {
		setOrder((prev) => {
			const newOrder = { ...prev };

			newOrder.guests[guestIdx] = { ...newOrder.guests[guestIdx], isValid: guest.isValid };

			return newOrder;
		});
	}, [guest.isValid]);

	return (
		<li className="guest">
			<span>{number}</span>
			<form>
				<p>
					<strong>{ticket ? "VIP" : "Regular"}</strong>
				</p>
				<div className="input_wrapper">
					<div>
						<label htmlFor="name" className="placeholder">
							Full Name: &nbsp;
						</label>
						<input
							id="name"
							type="text"
							name="name"
							value={guest.values.name}
							onChange={guest.handleChange}
							onBlur={guest.handleBlur}
						/>
					</div>
					<p className="error">{guest.touched.name && guest.errors.name && guest.errors.name}</p>
				</div>
				<div className="input_wrapper">
					<div>
						<label htmlFor="email" className="placeholder">
							Email: &nbsp;
						</label>
						<input
							id="email"
							type="email"
							name="email"
							value={guest.values.email}
							onBlur={guest.handleBlur}
							onChange={guest.handleChange}
						/>
					</div>
					<p className="error">{guest.touched.email && guest.errors.email && guest.errors.email}</p>
				</div>
			</form>
		</li>
	);
}

export default SingleGuest;
