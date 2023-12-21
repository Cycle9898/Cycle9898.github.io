import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Header() {
    return (
        <header className="header">
            <div className="header__main-title">
                <h1>Cyril CLEMENT</h1>
                <h2>Développeur JavaScript / TypeScript</h2>
            </div>

            <div className="header__networking">
                <ul>
                    <li>
                        <a href="https://github.com/Cycle9898" aria-label="GitHub" target="_blank" title="GitHub">
                            <FaGithub />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/cy-clement" aria-label="LinkedIn" target="_blank" title="LinkedIn">
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
            </div>

            <nav className="header__nav">
                <ul>
                    <li><a href="#section-who-am-i">Qui suis-je ?</a></li>
                    <li><a href="#section-my-projects">Mes projets</a></li>
                    <li><a href="#">Mes compétences</a></li>
                    <li><a href="#">Me contacter</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;