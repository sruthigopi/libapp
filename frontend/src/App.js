import logo from './logo.svg';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './componets/Navvbar';
import ViewBook from './componets/ViewBook';
// import Navbar from './componets/nAVbAR.JSX';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<ViewBook/>}/>
      </Routes>
    </div>
  );
}

export default App;
