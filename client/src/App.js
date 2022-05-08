import "./App.scss";
import PageHeader from "./components/PageHeader/PageHeader";
import InputSection from "./components/InputSection/InputSection";
import PageFooter from "./components/PageFooter/PageFooter";

function App() {
  return (
    <div>
      <PageHeader />
      <div className="app-container">
        <InputSection />
      </div>
      <PageFooter />
    </div>
  );
}

export default App;
