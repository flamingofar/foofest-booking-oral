import { createContext, useState } from "react";

export const AvailabilityContext = createContext();

export const AvailabilityProvider = ({ children }) => {
	const [availability, setAvailability] = useState([]);

	const value = {
		availability,
		setAvailability,
	};
	return <AvailabilityContext.Provider value={value}>{children}</AvailabilityContext.Provider>;
};
