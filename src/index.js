import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AvailabilityProvider } from "./context/Availabilty";
import { OrderProvider } from "./context/Tickets";
import Tickets from "./components/Tickets/Tickets";

import App from "./App";
import Checkout from "./components/Checkout/Checkout";
import Confirmation from "./components/Checkout/Confirmation/Confirmation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<OrderProvider>
			<AvailabilityProvider>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/tickets" element={<Tickets />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/confirmation" element={<Confirmation />} />
				</Routes>
			</AvailabilityProvider>
		</OrderProvider>
	</BrowserRouter>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
