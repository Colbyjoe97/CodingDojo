import './App.css';
import { Router } from '@reach/router'
import Search from './components/search'
import ResultPage from './components/results'

function App() {
  return (
    <div className="App">
      <Router>
        <Search  path="/"/>
        <ResultPage path="/:str/:int" />
      </Router>
    </div>
  );
}

export default App;
