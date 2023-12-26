import "./style/CSS/normalize.min.css";
import "./style/CSS/style.css";
import Header from "./components/Header";
import WhoAmISection from "./sections/WhoAmISection";
import MyProjectsSection from "./sections/MyProjectsSection";
import MySkillsSection from "./sections/MySkillsSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <WhoAmISection />

        <MyProjectsSection />

        <MySkillsSection />

        <ContactSection />
      </main>
    </>
  )
}

export default App
