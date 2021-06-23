import './App.css';
import { Router, Link } from '@reach/router'
import Dashboard from './components/Dashboard'
import NewStudent from './components/NewStudent'
import DisplayStudent from './components/DisplayStudent'


function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-success">All the ninjas of the dojo</h1>
        <Link to="/" className="btn btn-primary m-2">Home</Link>
        <Link to="/students/new" className="btn btn-secondary ">Create Student</Link>
      </div>
        <Router>
          <Dashboard path="/"></Dashboard>
          <NewStudent path="/students/new" />
          <DisplayStudent path="/students/info/:id" />
        </Router>
    </div>
  );
}

export default App;
