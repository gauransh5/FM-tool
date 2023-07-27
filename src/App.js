import { ApiData } from "./components/ApiData";
import ExpandableTable from "./components/ExpandableTable";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Header />
      <ExpandableTable jiraItems={ApiData.jiraItems} />
    </div>
  );
}

export default App;
