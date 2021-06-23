import './App.css';
import { Router, Link } from '@reach/router';
import Main from './components/Main'
import NewProduct from './components/newProduct';
import Products from './components/productTable';
import OneProduct from './components/viewProduct'
import EditProduct from './components/editProduct'

function App() {
  return (
    <div className="App">
      <Main />
      <Link to="/" className="btn btn-primary m-2">Home</Link>
      <Link to="/createProduct" className="btn btn-secondary">New</Link>
      <Router>
        <Products path="/" />
        <NewProduct path="/createProduct" />
        <OneProduct path="/view/:id" />
        <EditProduct path="/product/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
