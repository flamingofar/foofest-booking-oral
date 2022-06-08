import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
	const [order, setOrder] = useState({
		regular: 0,
		regularPrice: 799,
		vip: 0,
		vipPrice: 1299,
		area: "Jotunheim",
		guests: [],
		tentOption: {
			bringOwn: true,
			green: false,
		},
		crewTents: {
			twoPerson: 0,
			twoPersonPrice: 299,
			threePerson: 0,
			threePersonPrice: 399,
		},
		bookingfee: 99,
	});

	const value = {
		order,
		setOrder,
	};
	return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};
