import "../style/CSS/normalize.min.css";
import "../style/CSS/style.css";
import FloatingShortcuts from "../components/FloatingShortcuts";
import Header from "../components/Header";
import WhoAmISection from "../sections/WhoAmISection";
import MyProjectsSection from "../sections/MyProjectsSection";
import MySkillsSection from "../sections/MySkillsSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/Footer";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

function HomePage() {
	return (
		<Suspense fallback={<LoadingSpinner />}>
			<FloatingShortcuts />

			<Header />

			<main className="main">
				<WhoAmISection />

				<MyProjectsSection />

				<MySkillsSection />

				<ContactSection />
			</main>

			<Footer />
		</Suspense>
	);
}

export default HomePage;
