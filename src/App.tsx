import "./style/CSS/normalize.min.css";
import "./style/CSS/style.css";
import Header from "./components/Header";
import WhoAmISection from "./sections/WhoAmISection";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <WhoAmISection />
      </main>
    </>
  )
}

export default App
