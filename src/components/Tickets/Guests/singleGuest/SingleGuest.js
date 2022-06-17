import { useContext, useEffect } from "react";
import { OrderContext } from "../../../../context/Order";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./_SingleGuest.scss";
import "../../../../styles/shared/_textinput.scss";
function SingleGuest({ number, ticket, id }) {
	const formik = useFormik({
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

				newOrder.guests[guestIdx] = { ...newOrder.guests[guestIdx], name: formik.values.name };

				return newOrder;
			});
		};
		handleNameInput();
	}, [formik.values.name]);

	useEffect(() => {
		const handleEmailInput = () => {
			setOrder((prev) => {
				const newOrder = { ...prev };

				newOrder.guests[guestIdx] = { ...newOrder.guests[guestIdx], email: formik.values.email };

				return newOrder;
			});
		};
		handleEmailInput();
	}, [formik.values.email]);

	useEffect(() => {
		setOrder((prev) => {
			const newOrder = { ...prev };

			newOrder.guests[guestIdx] = { ...newOrder.guests[guestIdx], isValid: formik.isValid };

			return newOrder;
		});
	}, [formik.isValid]);

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
							value={formik.values.name}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</div>
					<p className="error">{formik.touched.name && formik.errors.name && formik.errors.name}</p>
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
							value={formik.values.email}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
						/>
					</div>
					<p className="error">
						{formik.touched.email && formik.errors.email && formik.errors.email}
					</p>
				</div>
			</form>
		</li>
	);
}

export default SingleGuest;
