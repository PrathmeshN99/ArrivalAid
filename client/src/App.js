import './App.css';
import Map from './pages/Map'
import SearchBox from './components/SearchBox';
import Home from './pages/Home';
import Form from "./pages/form";
import Navbar from './components/navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
  return (
   
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/map" element={<Map/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes> 
  
    
    </>
   
 
  );
}

      {/* <div className="input">
        <h1 className='heading'>House Search</h1>
       <SearchBox/>
      </div>
          <Map/> */}

export default App;
