import { Link } from "react-router-dom";
import "./_TimerModal.scss";

function TimerModal() {
	return (
		<aside className="modal">
			<div>
				<div>
					<h5>Your reservation is now invalid</h5>
					<p>
						Please go back to start and make a new reservation, or go and see the lineup and
						shcedule.
					</p>
				</div>
				<div>
					<Link to={"/"} className="cta">
						Back to start
					</Link>
					<a className="cta" href="https://foofestapp.netlify.app/" target="_blank">
						To schedule
					</a>
				</div>
			</div>
		</aside>
	);
}

export default TimerModal;
