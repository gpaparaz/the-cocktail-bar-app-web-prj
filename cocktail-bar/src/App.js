import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './view/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router className='App'>
    <Header />
    <Sidebar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
