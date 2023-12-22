import "./style/CSS/normalize.min.css";
import "./style/CSS/style.css";
import Header from "./components/Header";
import WhoAmISection from "./sections/WhoAmISection";
import MyProjectsSection from "./sections/MyProjectsSection";
import MySkillsSection from "./sections/MySkillsSection";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <WhoAmISection />

        <MyProjectsSection />

        <MySkillsSection />
      </main>
    </>
  )
}

export default App
