import data from "./data";
import Card from "./components/Card";
import Header from "./components/Header";
function App() {
  const cardComponent = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="journal">
      <Header />

      <section>{cardComponent}</section>
      <hr />
    </div>
  );
}

export default App;
