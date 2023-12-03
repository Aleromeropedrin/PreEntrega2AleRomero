import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Error from './Components/Error';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <NavBar/>
            
            <Routes>

            <Route path= '/' element={ <ItemListContainer />}/>
            <Route path= '/category/:id' element={ <ItemListContainer />}/>
            <Route path= '/Item/:id' element={ <ItemDetailContainer />}/>
            <Route path= {'*'} element={ <Error />}/>
            
            </Routes>
            
            </BrowserRouter>
        </div>
    );
}

export default App;