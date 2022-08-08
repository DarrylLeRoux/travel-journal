import data from "./data";
import Card from "./components/Card";
import Header from "./components/Header";
function App() {
  const cardComponent = data.map((item) => {
    return <Card {...item} />;
  });

  return (
    <div className="journal">
      <Header className="header" />
      <section className="card">{cardComponent}</section>
    </div>
  );
}

export default App;
