import logo from './logo.svg';
import './App.css';
import AddSubscribersPage from './components/AddSubscribersPage';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddSubscribersPage/>}/>
      <Route path="/view" element={<View/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
