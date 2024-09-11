function WhoAmISection() {
	return (
		<section className="section" id="section-who-am-i">
			<h3 className="section-title">Qui suis-je ?</h3>

			<article className="introduction">
				<div className="introduction__profile-pic">
					<img src="/assets/images/profile-pic.jpg" alt="Photo de Cyril CLEMENT" />
				</div>

				<div className="introduction__text">
					<p>Je m'appelle Cyril CLEMENT.</p>

					<p>Je suis passionné par la création de sites et d'applications web dynamiques.</p>

					<p>
						Fort de ma formation de "développeur d’application - JavaScript React" de chez OpenClassrooms,
						je suis en mesure d'intégrer une maquette, implémenter une logique métier, conceptualiser une
						API ou une interface utilisateur et écrire du code modulaire et réutilisable afin de créer des
						applications web robustes et stylisées.
					</p>

					<p>
						J'ai poursuivi mon apprentissage en autodidacte, en construisant des projets
						professionnalisants, notamment avec le framework Next.JS, le langage de programmation PHP et son
						framework Symfony.
					</p>

					<p>Je suis à l'écoute d'opportunités.</p>

					<a
						href="/assets/CV/CV_Cyril_CLEMENT_Dev.pdf"
						download="CV_Cyril_CLEMENT_Dev.pdf"
						className="introduction__cv main-button">
						Télécharger mon CV
					</a>
				</div>
			</article>
		</section>
	);
}

export default WhoAmISection;
