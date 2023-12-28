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

                    <p>Je suis passionné par la création de sites et d'applications web dynamiques.</p>

                    <p>
                        Fort de ma formation de développeur d’application
                        JavaScript de chez OpenClassrooms, je suis en mesure d'intégrer une maquette,
                        implémenter une logique métier, conceptualiser une API ou une interface utilisateur
                        et écrire du code modulaire et réutilisable afin de créer des applications web robustes et stylisées.
                    </p>

                    <a href={CV} target="_blank" className="introduction__cv">Télécharger mon CV</a>
                </div>
            </article>
        </section>
    );
}

export default WhoAmISection;