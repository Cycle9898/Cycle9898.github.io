import profilePic from "../assets/images/profile-pic.jpg";
import CV from "../assets/CV/CV_Cyril_CLEMENT_Dev.pdf";

function WhoAmISection() {
    return (
        <section className="section" id="section-who-am-i">
            <h3>Qui suis-je ?</h3>

            <article className="introduction">
                <div className="introduction__profile-pic">
                    <img src={profilePic} alt="Photo de Cyril CLEMENT" />
                </div>

                <div className="introduction__text">
                    <p>Je m'appelle Cyril CLEMENT.</p>
                    <p>Après 10 ans dans l'e-commerce, j'ai opté pour une reconversion professionnelle
                        vers un autre domaine qui me tient à cœur : l'informatique.</p>
                    <p>
                        Suite à ma formation de développeur d’application
                        JavaScript chez OpenClassrooms, je suis déterminé à relever de
                        nouveaux défis, résoudre des problématiques et créer des
                        applications robustes et stylisées.
                    </p>

                    <a href={CV} target="_blank" className="introduction__cv">Télécharger mon CV</a>
                </div>
            </article>
        </section>
    );
}

export default WhoAmISection;