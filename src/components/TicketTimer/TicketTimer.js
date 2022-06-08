import "./_TicketTimer.scss";
// import { useEffect, useState } from "react";
import Countdown, { zeroPad } from "react-countdown";

function TicketTimer({ timeStamp, setTimeoutDone, timeoutDone }) {
	// Renderer callback with condition
	const countdown = ({ minutes, seconds, completed }) => {
		if (completed) {
			setTimeoutDone(true);
			return <span>Time Left: 00:00</span>;
		} else {
			// Render a countdown
			return (
				<span>
					Time Left: {zeroPad(minutes)}:{zeroPad(seconds)}
				</span>
			);
		}
	};
	return (
		<div className="timer">
			<Countdown
				className="timerCountdown"
				zeroPadTime={2}
				date={Date.now() + timeStamp}
				renderer={countdown}
			/>
		</div>
	);
}

export default TicketTimer;
