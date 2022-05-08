import "./App.scss";
import PageHeader from "./components/PageHeader/PageHeader";
import InputSection from "./components/InputSection/InputSection";

function App() {
  return (
    <div>
      <PageHeader />
      <div className="app-container">
        <InputSection />
      </div>
    </div>
  );
}

export default App;
