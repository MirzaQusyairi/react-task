import React from 'react'
import dotImg from '../../Assets/Images/img-dot@2x.png'

function Footer() {
    return (
        <footer
			className="w-100 h-25 position-absolute bottom-0 end-0"
			style={{ backgroundColor: "#edf6ff" }}
		>
			<img
				className="position-absolute top-50 translate-middle"
				style={{ left: "25%", width: "7%" }}
				src={dotImg}
				alt="dots"
			/>
		</footer>
    )
}

export default Footer
