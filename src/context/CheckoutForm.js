import { createContext, useState } from "react";

export const CheckoutFormContext = createContext();

export const CheckoutFormProvider = ({ children }) => {
	const [addressActive, setAdressActive] = useState(true);
	const [payActive, setPayActive] = useState(true);

	const value = {
		addressActive,
		setAdressActive,
		payActive,
		setPayActive,
	};
	return <CheckoutFormContext.Provider value={value}>{children}</CheckoutFormContext.Provider>;
};
