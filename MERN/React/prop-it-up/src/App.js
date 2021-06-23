import './App.css';
import Person from './components/PersonCard'

function App() {
  // JS can be put in here but not in the Return
  return (
    <div className="App">
      <Person firstName = "Jeremy" lastName="Buck" age={23} hairColor="blonde"></Person>
      <Person firstName = "John" lastName="Doe" age={53} hairColor="Red"></Person>
      <Person firstName = "Ron" lastName="Snow" age={13} hairColor="Black"></Person>
      <Person firstName = "Jack" lastName="Black" age={43} hairColor="Black"></Person>
    </div>
  );
}

export default App;

