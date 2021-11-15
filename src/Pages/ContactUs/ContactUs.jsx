import React from 'react'
import styles from './ContactUs.module.css'
import { Form } from '../../Components'

import logo from '../../Assets/Images/logo-ALTA-v2@2x.png'

function ContactUs() {
    return (
        <div className="row row-cols-sm-1 row-cols-sm-2 w-100 h-100">
			<div className={`${styles.sideimage} col-sm-5 col-md-5 p-0 position-relative`}>
				<div className={`${styles.overlay} w-100 h-100 `} />
				<img
					src={logo}
					alt="logo"
					id="side-image-logo"
					className={`${styles.logo} opacity-50 position-absolute top-50 start-50 translate-middle`}
				/>
			</div>
			<Form />
		</div>
    )
}

export default ContactUs
