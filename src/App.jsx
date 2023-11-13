import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './App.css';


function App() {
    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer greeting='Bienvenidos a Ferreteria Avenida nuestra pagina esta en Construccion'/>
            
        </div>
    );
}

export default App;
