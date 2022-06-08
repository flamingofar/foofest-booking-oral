import { createContext, useState } from "react";

export const TentsContext = createContext();

export const TentsProvider = ({ children }) => {
	const [tentOptionActive, setTentOptionActive] = useState(false);

	const value = {
		tentOptionActive,
		setTentOptionActive,
	};
	return <TentsContext.Provider value={value}>{children}</TentsContext.Provider>;
};
