import './App.css';
import { Router } from '@reach/router'
import HomePage from './components/home'
import DefaultPage from './components/default'
import NumOrStringPage from './components/numOrString'
import StyledPage from './components/styledWord'

function App() {
  return (
    <div className="App">
      <Router>
        <DefaultPage path="/" />
        <HomePage path="/home" />
        <NumOrStringPage path=":input" />
        <StyledPage path=":str/:col1/:col2" />
      </Router>
    </div>
  );
}

export default App;
