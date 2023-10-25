import Hello from "./Hello";
import Page from "./Page";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Page>
        <Hello name="Bhalchandra" />
        <Card/>
      </Page>
    </div>
  );
}

export default App;
