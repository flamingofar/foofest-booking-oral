import "./_Confirmation.scss";
import Nav from "../../Nav/Nav";
import { useContext } from "react";
import { OrderContext } from "../../../context/Tickets";
import { useLocation } from "react-router-dom";
import party from "party-js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Confirmation() {
	const { order } = useContext(OrderContext);

	const location = useLocation();
	console.log(location);

	const sum = {
		bookingfee: 99,
		regular: order.regular * order.regularPrice,
		vip: order.vip * order.vipPrice,
		twoPrs: order.crewTents.twoPersonPrice * order.crewTents.twoPerson,
		threePrs: order.crewTents.threePersonPrice * order.crewTents.threePerson,
		greenCamping: order.tentOption.green ? 299 : 0,
	};

	const createPDF = () => {
		const input = document.querySelector("#order");
		html2canvas(input, { logging: true, letterRendering: 1, useCORS: true }).then((canvas) => {
			const width = 130;
			const height = (canvas.height * width) / canvas.width;

			const imgData = canvas.toDataURL("img/png");

			const pdf = new jsPDF("p", "mm", "a4");

			pdf.addImage(imgData, "PNG", 37, 0, width, height);
			pdf.save(
				`foofest-confirmation-${
					location.state.reservationNr !== null
						? location.state.reservationNr
						: "No Reservation Number Found"
				}.pdf`
			);
			console.log(pdf);
		});
	};

	return (
		<>
			<Nav />
			<main id="confirmation">
				<section>
					<div id="order">
						<h1>
							Thank you for your order!
							<br />
							We can’t wait to FooFest with you!
						</h1>
						<p>Heres's your order confirmation: </p>
						<h4>
							Reservation Number:{" "}
							<span>
								{location.state.reservationNr !== null
									? location.state.reservationNr
									: "No Reservation Number Found"}
							</span>
						</h4>
						<div className="confirmation_order">
							{order.guests === [] ? null : (
								<ul id="guests">
									Guests:
									{order.guests.map((guest, idx) => {
										return (
											<li>
												<div>
													<span> {guest.name}</span>
													<span>{guest.email}</span>
												</div>
											</li>
										);
									})}
								</ul>
							)}
							<ul>
								<li>
									<div>
										<p>Bookingfee</p>
										<span> {order.bookingfee},-</span>
									</div>
									<p>{order.bookingfee},-</p>
								</li>
							</ul>
							<ul>
								Tickets:
								{order.regular ? (
									<li>
										<div>
											<p>Regular Ticket x {order.regular}</p>
											<span>á {order.regular} x 799,-</span>
										</div>
										<p>{order.regular * order.regularPrice},-</p>
									</li>
								) : null}
								{order.vip ? (
									<li>
										<div>
											<p>Vip Ticket x {order.vip}</p>
											<span>á {order.vip} x 799,-</span>
										</div>
										<p>{order.vip * order.vipPrice},-</p>
									</li>
								) : null}
							</ul>

							<ul>
								Area:
								<li>
									<div>
										<p>{order.area}</p>
										<span>Free</span>
									</div>
									<p>0,-</p>
								</li>
							</ul>

							<ul>
								Tent:
								{order.tentOption.bringOwn ? (
									<li>
										<div>
											<p>Bring Own Tent</p>
											<span>Free</span>
										</div>
										<p>0,-</p>
									</li>
								) : null}
								{order.tentOption.bringOwn ? null : (
									<li>
										<div>
											<p>Crew Setup - 2 prs.: {order.crewTents.twoPerson}</p>
											<span>á {order.crewTents.twoPerson} x 399,-</span>
										</div>
										<p>{order.crewTents.twoPerson * order.crewTents.twoPersonPrice},-</p>
									</li>
								)}
								{order.tentOption.bringOwn ? null : (
									<li>
										<div>
											<p>Crew Setup - 3 prs.: {order.crewTents.threePerson}</p>
											<span>á {order.crewTents.threePerson} x 499,-</span>
										</div>
										<p>{order.crewTents.threePerson * order.crewTents.threePersonPrice},-</p>
									</li>
								)}
								{order.tentOption.green && (
									<li>
										<div>
											<p>Green Camping</p>
											<span>299,-</span>
										</div>
										<p>249,-</p>
									</li>
								)}
							</ul>
							<ul>
								<li>
									<div>
										<p>Total</p>
									</div>
									<p>
										{Object.values(sum).reduce(
											(previousValue, currentValue) => previousValue + currentValue,
											0
										)}
										,-
									</p>
								</li>
							</ul>
						</div>
					</div>

					<div className="btn-container">
						<button
							className="cta cta-main"
							onClick={(e) => {
								createPDF();
								party.confetti(e.target, { count: party.variation.range(100, 200) });
							}}
						>
							Download As PDF
						</button>
						<a href="https://foofestapp.netlify.app/" className="cta">
							To Festival App
						</a>
					</div>
				</section>
			</main>
		</>
	);
}

export default Confirmation;
