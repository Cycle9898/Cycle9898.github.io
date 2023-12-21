import "./style/CSS/normalize.min.css";
import "./style/CSS/style.css";
import Header from "./components/Header";
import WhoAmISection from "./sections/WhoAmISection";
import MyProjectsSection from "./sections/MyProjectsSection";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <WhoAmISection />

        <MyProjectsSection />
      </main>
    </>
  )
}

export default App
