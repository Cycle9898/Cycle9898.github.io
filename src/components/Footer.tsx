import React from "react";

function Footer() {
	const today: Date = new Date();

	return (
		<footer className="footer">
			<div className="footer__container">
				<h3>Copyright {today.getFullYear()} - Cyril CLEMENT</h3>
			</div>
		</footer>
	);
}

export default Footer;
