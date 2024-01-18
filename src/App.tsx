import "./style/CSS/normalize.min.css";
import "./style/CSS/style.css";
import FloatingContactButton from "./components/FloatingContactButton";
import Header from "./components/Header";
import WhoAmISection from "./sections/WhoAmISection";
import MyProjectsSection from "./sections/MyProjectsSection";
import MySkillsSection from "./sections/MySkillsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <FloatingContactButton />

      <Header />

      <main className="main">
        <WhoAmISection />

        <MyProjectsSection />

        <MySkillsSection />

        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default App
