import "./_ContactInfo.scss";
import { useFormikContext } from "formik";

function ContactInfo({ formik }) {
	return (
		<fieldset className="section_p">
			<h2>Who's placing the order?</h2>
			<div className="input_wrapper">
				<div>
					<label htmlFor="email" className="placeholder">
						Email: &nbsp;
					</label>
					<input
						type="email"
						id="email"
						name="email"
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
				</div>
				<p className="error">
					{formik.touched.email && formik.errors.email && formik.errors.email}
				</p>
			</div>

			<div className="double_input">
				<div className="input_wrapper">
					<div>
						<label htmlFor="email" className="placeholder">
							First Name: &nbsp;
						</label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.firstName}
						/>
					</div>
					<p className="error">
						{formik.touched.firstName && formik.errors.firstName && formik.errors.firstName}
					</p>
				</div>

				<div className="input_wrapper">
					<div>
						<label htmlFor="email" className="placeholder">
							Last Name: &nbsp;
						</label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.lastName}
						/>
					</div>
					<p className="error">
						{formik.touched.lastName && formik.errors.lastName && formik.errors.lastName}
					</p>
				</div>
			</div>

			<div className="input_wrapper">
				<div>
					<label htmlFor="email" className="placeholder">
						Phone: &nbsp;
					</label>
					<input
						type="phone"
						id="phone"
						name="phone"
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.phone}
					/>
				</div>
				<p className="error">
					{formik.touched.phone && formik.errors.phone && formik.errors.phone}
				</p>
			</div>
		</fieldset>
	);
}

export default ContactInfo;
