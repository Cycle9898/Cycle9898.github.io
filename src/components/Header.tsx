"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
	// React local states
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [windowWidth, setWindowWidth] = useState<number>(700);

	// Utility functions
	const toggleIsOpen = () => {
		if (windowWidth <= 768) {
			setIsOpen((prevState: boolean) => !prevState);
		}
	};

	const getWindowWidth = () => setWindowWidth(window.innerWidth);

	useEffect(() => {
		// store initial window width in state
		setWindowWidth(window.innerWidth);
		// event listener to get and store window width in the state on screen resize
		window.addEventListener("resize", getWindowWidth);

		return () => {
			// cleanup event listener
			window.removeEventListener("resize", getWindowWidth);
		};
	}, []);

	return (
		<header className="header">
			<div className="header__main-title">
				<a href="/">
					<h1>Cyril CLEMENT</h1>
					<h2>Développeur JavaScript / TypeScript</h2>
				</a>
			</div>

			<div className="header__networking">
				<ul>
					<li>
						<a href="https://github.com/Cycle9898" aria-label="GitHub" target="_blank" title="GitHub">
							<FaGithub />
						</a>
					</li>

					<li>
						<a
							href="https://www.linkedin.com/in/cy-clement"
							aria-label="LinkedIn"
							target="_blank"
							title="LinkedIn"
							className="li-logo">
							<FaLinkedin />
						</a>
					</li>

					<li>
						<a
							href="/assets/CV/CV_Cyril_CLEMENT_Dev.pdf"
							aria-label="Voir mon CV en PDF"
							target="_blank"
							title="Voir mon CV"
							className="pdf-logo">
							<FaFilePdf />
						</a>
					</li>
				</ul>
			</div>

			<nav className="header__nav">
				{(isOpen || windowWidth > 768) && (
					<ul onClick={toggleIsOpen}>
						<li className="main-button">
							<a href="#section-who-am-i">Qui suis-je ?</a>
						</li>
						<li className="main-button">
							<a href="#section-my-projects">Mes projets</a>
						</li>
						<li className="main-button">
							<a href="#section-my-skills">Mes compétences</a>
						</li>
						<li className="main-button">
							<a href="#section-contact">Me contacter</a>
						</li>
					</ul>
				)}
			</nav>

			<div className="burger-menu" onClick={toggleIsOpen}>
				<GiHamburgerMenu aria-label="Afficher ou masquer la barre de navigation" />
			</div>
		</header>
	);
}

export default Header;
