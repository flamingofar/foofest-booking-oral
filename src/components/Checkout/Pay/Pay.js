import "./_Pay.scss";
import { useEffect } from "react";
import NumberFormat from "react-number-format";
function Pay({ formik }) {
	return (
		<fieldset className="section_p">
			<h2>How are you paying?</h2>
			<div className="payment">
				<input
					type="radio"
					value="mobilepay"
					id="mobilepay"
					name="paymentMethod"
					onChange={formik.handleChange}
				/>
				<input
					defaultChecked
					type="radio"
					value="creditcard"
					id="creditcard"
					name="paymentMethod"
					onChange={formik.handleChange}
				/>
				<input
					type="radio"
					value="paypal"
					id="paypal"
					name="paymentMethod"
					onChange={formik.handleChange}
				/>
				<label htmlFor="mobilepay" className="mobilepay">
					Mobile Pay
				</label>
				<label htmlFor="creditcard" className="creditcard">
					Credit Card
				</label>
				<label htmlFor="paypal" className="paypal">
					PayPal
				</label>
			</div>
			<div className="credit_wrapper">
				<div className="input_wrapper">
					<div>
						<label htmlFor="cardnumber" className="placeholder">
							Card Number: &nbsp;
						</label>
						<NumberFormat
							allowEmptyFormatting
							disabled={formik.values.paymentMethod !== "creditcard" ? true : false}
							className={
								formik.values.paymentMethod === "mobilepay" ||
								formik.values.paymentMethod === "paypal"
									? "card_disabled"
									: ""
							}
							format="#### #### #### ####"
							type="text"
							id="cardnumber"
							name="cardnumber"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.cardnumber}
							onValueChange={(values) => {
								const { value } = values;
								formik.setFieldValue("cardnumber", value);
							}}
						></NumberFormat>
					</div>
					<p className="error">
						{formik.touched.cardnumber && formik.errors.cardnumber && formik.errors.cardnumber}
					</p>
				</div>

				<div className="double_input">
					<div className="input_wrapper">
						<div>
							<label htmlFor="exp" className="placeholder">
								EXP: &nbsp;
							</label>
							<NumberFormat
								allowEmptyFormatting
								disabled={formik.values.paymentMethod !== "creditcard" ? true : false}
								className={
									formik.values.paymentMethod === "mobilepay" ||
									formik.values.paymentMethod === "paypal"
										? "card_disabled"
										: ""
								}
								format="##/##"
								placeholder="MM/YY"
								mask={["M", "M", "Y", "Y"]}
								type="text"
								id="exp"
								name="exp"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.exp}
								onValueChange={(values) => {
									const { value } = formik.values;
									formik.setFieldValue("exp", value);
								}}
							/>
						</div>
						<p className="error">{formik.touched.exp && formik.errors.exp && formik.errors.exp}</p>
					</div>

					<div className="input_wrapper">
						<div>
							<label htmlFor="cvc" className="placeholder">
								CVC: &nbsp;
							</label>
							<NumberFormat
								allowEmptyFormatting
								disabled={formik.values.paymentMethod !== "creditcard" ? true : false}
								className={
									formik.values.paymentMethod === "mobilepay" ||
									formik.values.paymentMethod === "paypal"
										? "card_disabled"
										: ""
								}
								format="###"
								type="text"
								id="cvc"
								name="cvc"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.cvc}
								onValueChange={(values) => {
									const { value } = formik.values;
									formik.setFieldValue("cvc", value);
								}}
							/>
						</div>
						<p className="error">{formik.touched.cvc && formik.errors.cvc && formik.errors.cvc}</p>
					</div>
				</div>
			</div>
			<button
				type="submit"
				className={`cta pay ${formik.isValid ? "" : "disabled"}`}
				disabled={formik.isValid ? false : true}
			>
				Pay
			</button>
		</fieldset>
	);
}

export default Pay;
