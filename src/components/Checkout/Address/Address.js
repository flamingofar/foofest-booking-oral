import "./_Address.scss";

function Address({ formik }) {
	return (
		<fieldset id="address" className="section_p">
			<h2>Where do you live?</h2>
			<div className="input_wrapper">
				<div>
					<label htmlFor="country" className="placeholder">
						Country: &nbsp;
					</label>
					<input
						type="text"
						id="country"
						name="country"
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.country}
					/>
				</div>
				<p className="error">
					{formik.touched.country && formik.errors.country && formik.errors.country}
				</p>
			</div>
			<div className="input_wrapper">
				<div>
					<label htmlFor="text" className="placeholder">
						Streetname & No.: &nbsp;
					</label>
					<input
						type="text"
						id="street"
						name="street"
						placeholder=""
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.street}
					/>
				</div>
				<p className="error">
					{formik.touched.street && formik.errors.street && formik.errors.street}
				</p>
			</div>

			<div className="double_input">
				<div className="input_wrapper">
					<div>
						<label htmlFor="city" className="placeholder">
							City: &nbsp;
						</label>
						<input
							type="text"
							id="city"
							name="city"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.city}
						/>
					</div>
					<p className="error">{formik.touched.city && formik.errors.city && formik.errors.city}</p>
				</div>
				<div className="input_wrapper">
					<div>
						<label htmlFor="zip" className="placeholder">
							Zip Code: &nbsp;
						</label>
						<input
							type="text"
							id="zip"
							name="zip"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.zip}
						/>
					</div>
					<p className="error">{formik.touched.zip && formik.errors.zip && formik.errors.zip}</p>
				</div>
			</div>
		</fieldset>
	);
}

export default Address;
