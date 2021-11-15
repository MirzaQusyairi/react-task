import React from 'react'
import styles from './ReviewMessage.module.css'
import { useNavigate } from 'react-router'
import { Footer } from '../../Components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData } from '../../Redux/reducer';

function ReviewMessage() {
	const form = useSelector((state) => state.form.forms);
	console.log(form);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClose = (e) => {
		e.preventDefault();
		dispatch(deleteData());
		navigate("/");
	}
	return (
		<div>
			<div className={`${styles.container} container card p-5 position-absolute top-50 start-50 translate-middle w-50`}>
				<div className="row form-output">
					<div className="col-5 col-md-4">
						<p className="mb-0">
							Full Name<span className="float-end">:</span>
						</p>
					</div>
					<div className="col">
						<p className="mb-sm-0 mb-3 form-data" id="fullname">
							{form.nama}
						</p>
					</div>
				</div>
				<div className="row form-output">
					<div className="col-5 col-md-4">
						<p className="mb-0">
							Email Address<span className="float-end">:</span>
						</p>
					</div>
					<div className="col">
						<p className="mb-sm-0 mb-3 form-data" id="email">
							{form.email}
						</p>
					</div>
				</div>
				<div className="row form-output">
					<div className="col-5 col-md-4">
						<p className="mb-0">
							Phone Number<span className="float-end">:</span>
						</p>
					</div>
					<div className="col">
						<p className="mb-sm-0 mb-3 form-data" id="phone">
							{form.phone}
						</p>
					</div>
				</div>
				<div className="row form-output">
					<div className="col-5 col-md-4">
						<p className="mb-0">
							Nationality<span className="float-end">:</span>
						</p>
					</div>
					<div className="col">
						<p className="mb-sm-0 mb-3 form-data" id="nationality">
							{form.nationality}
						</p>
					</div>
				</div>
				<div className="row form-output my-4">
					<div className="col my-3">
						<p className="form-data fst-italic" id="message">
							{form.message}
						</p>
					</div>
				</div>

				<div
					className="w-50 m-auto"
					style={{ border: "1px solid #ccd7eb" }}
				></div>
				<div className="mt-3" id="thx-msg">
					<h4>Thanks for contacting us!</h4>
					<h4>We will be in touch with you shortly.</h4>
					<button
						type="button"
						onClick={(e) => {
							handleClose(e);
						}}
						className="btn text-white px-4 mt-2 rounded-pill"
						style={{ backgroundColor: "#f47522" }}
					>
						Home
					</button>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default ReviewMessage
