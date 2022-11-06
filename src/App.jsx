
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar.jsx';
import About from './Pages/About';
import Analitics from './Pages/Analitics';
import Comments from './Pages/Comments';
import Dashboard from './Pages/Dashboard.jsx';
import Products from './Pages/Product';
import ProductList from './Pages/ProductList';


function App() {
  
  return (
    <div className="App">
     <BrowserRouter>
    <Sidebar>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/comments' element={<Comments/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/analitics' element={<Analitics/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/productlist' element={<ProductList/>}/>
     </Routes>
    </Sidebar>
     </BrowserRouter>
    </div>
  );
}

export default App;
