import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
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
