import "./_TicketInfo.scss";
import { Link } from "react-router-dom";

function TicketInfo() {
	return (
		<section className="ticket_info">
			<div>
				<div className="title">
					<h1>FooFest</h1>
					<p>A festival for everyone</p>
					<p>21.06.2022 - 26.06.2022</p>
				</div>

				<figure>
					<div className="regular">
						<h5>Regular</h5>
						<h5>799,-</h5>
					</div>
					<div className="vip">
						<h5>VIP</h5>
						<h5>1299,-</h5>
					</div>
				</figure>
				<Link className="cta" to={"/tickets"}>
					Get your ticket now
				</Link>
			</div>
		</section>
	);
}

export default TicketInfo;
