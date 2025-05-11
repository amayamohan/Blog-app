
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Productcard from './components/Productcard';
import Footer from './components/Footer';
import Form from './components/Form'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/"  element={<Productcard/>} />
          <Route path="/product/:id" element={<Details/>} /> {/* Details page route */}
          <Route path="/create" element={<Form/>} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
