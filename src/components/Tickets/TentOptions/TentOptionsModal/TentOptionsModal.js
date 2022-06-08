import "./_TentOptionsModal.scss";

function TentOptionsModal({ modalOpen, setModalOpen }) {
	const handleClose = () => {
		setModalOpen(!modalOpen);
	};

	return (
		<aside id="tent_modal" onClick={handleClose}>
			<div>
				<div className="modal_close" onClick={handleClose}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-x-square"
						viewBox="0 0 16 16"
					>
						<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
						<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
					</svg>
				</div>
				<h5>Tent Options</h5>

				<p>
					<strong> Bring your own tent</strong>
					<br />
					Is like the name says, you are bringing your own tent to the festival and you are setting
					it up yourself. This option is free.
				</p>

				<p>
					<strong> Crew set up </strong>
					<br />
					Choose between a 2 or 3-person tent, that our crew will set up for you before your
					arrival. This option has a fee and depends on the size of the tent.
				</p>

				<p>
					<strong> Green camping </strong>
					<br />
					Green camping is not a tent, but a contribution to help us make a greener festival each
					year. All the money from the contributions will go to the GreenFooFund.
				</p>
			</div>
		</aside>
	);
}

export default TentOptionsModal;
