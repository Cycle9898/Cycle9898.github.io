import { useEffect,useState } from "react";
import { FaGithub,FaLinkedin,FaFilePdf } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import CV from "../assets/CV/CV_Cyril_CLEMENT_Dev.pdf";

function Header() {
    // React local states
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const [windowWidth,setWindowWidth] = useState<number>(window.innerWidth);

    // Utility functions
    const toggleIsOpen = () => {
        if (windowWidth <= 768) {
            setIsOpen((prevState: boolean) => !prevState)
        }
    };

    const getWindowWidth = () => setWindowWidth(window.innerWidth);

    useEffect(() => {
        // event listener to get and store window width in the state
        window.addEventListener('resize',getWindowWidth);

        return () => {
            // cleanup event listeners
            window.removeEventListener('resize',getWindowWidth);
        };
    },[]);

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
                        <a href="https://www.linkedin.com/in/cy-clement" aria-label="LinkedIn" target="_blank" title="LinkedIn" className="li-logo">
                            <FaLinkedin />
                        </a>
                    </li>

                    <li>
                        <a href={CV} aria-label="Télécharger mon CV en PDF" target="_blank" title="Télécharger mon CV" className="pdf-logo">
                            <FaFilePdf />
                        </a>
                    </li>
                </ul>
            </div>

            <nav className="header__nav">
                {(isOpen || windowWidth > 768) &&
                    <ul onClick={toggleIsOpen}>
                        <li className="main-button"><a href="#section-who-am-i">Qui suis-je ?</a></li>
                        <li className="main-button"><a href="#section-my-projects">Mes projets</a></li>
                        <li className="main-button"><a href="#section-my-skills">Mes compétences</a></li>
                        <li className="main-button"><a href="#section-contact">Me contacter</a></li>
                    </ul>}
            </nav>

            <div className="burger-menu" onClick={toggleIsOpen}>
                <GiHamburgerMenu aria-label="Afficher ou masquer la barre de navigation" />
            </div>
        </header>
    );
}

export default Header;