
import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import VendingMachine from './VendingMachine'
import Btn from './Button'
import Cookies from './Cookies';
import Cheesecake from './Cheescake';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
    <Route exact path='/' element={<VendingMachine />}></Route>
    <Route exact path='/cookies' element={<Cookies />}></Route>
    <Route exact path='/cheesecake' element={<Cheesecake />}></Route>
    </Routes>
    <Btn />
</BrowserRouter>
    </div>
  );
}

export default App;
