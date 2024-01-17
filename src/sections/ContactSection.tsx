import { FaLinkedin } from "react-icons/fa6";

function ContactSection() {
    return (
        <section className="section" id="section-contact">
            <h3 className="section-title">Me contacter</h3>

            <div className="contact-methods">
                <a href="https://www.linkedin.com/in/cy-clement" target="_blank" className="main-button">
                    Me contacter sur LinkedIn <span className="li-logo"><FaLinkedin aria-label="logo LinkedIn" /></span>
                </a>

                <form action="https://formsubmit.co/c3c0eb6b212866775d9f0504b95ccabc" method="POST" className="message-form">
                    <h4>Me laisser un message via le formulaire</h4>

                    <div className="message-form__input">
                        <label htmlFor="name">Nom :</label>
                        <input type="text" name="name" id="name" placeholder="Votre nom" required />
                    </div>

                    <div className="message-form__input">
                        <label htmlFor="email">Email :</label>
                        <input type="email" name="email" id="email" placeholder="Votre email" required />
                    </div>

                    <div className="message-form__input">
                        <label htmlFor="message">Message :</label>
                        <textarea name="message" rows={12} cols={35} id="message" placeholder="Votre message." required></textarea>
                    </div>

                    <div className="message-form__agreement">
                        <input type="checkbox" name="agreement" required />
                        <p>J'accepte de transmettre les données des champs demandés afin de traiter cette demande.</p>
                    </div>

                    <div className="message-form__button">
                        <button type="submit" name="submit" className="main-button">Envoyer le message</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactSection;