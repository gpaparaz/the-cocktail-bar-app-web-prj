import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import AllCocktails from './view/AllCocktails/AllCocktails';
import Home from './view/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleCocktailPage from './view/SingleCocktailPage/SingleCocktailPage';
import Contacts from './view/Contacts/Contacts';

function App() {
  return (
    <Router className='App'>
    <Header />
    <Sidebar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cocktails' element={<AllCocktails />} />
      <Route path='/cocktail/:id' element={<SingleCocktailPage />} />
      <Route path='/contacts' element={<Contacts />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
