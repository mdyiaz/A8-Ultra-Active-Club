import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Games from './component/Games/Games';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Cart from './component/Cart/Cart';

function App() {

    

  return (
    <div className="App">
     <Header></Header>
     <Games></Games>
     {/* <Cart></Cart> */}
    </div>
  );
}

export default App;
