import logo from './logo.svg';
import './App.css';
import AddSubscribersPage from './components/AddSubscribersPage';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchSubscribersPage from './components/SearchSubscribersPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddSubscribersPage/>}/>
      <Route path="/view" element={<View/>}/>
      <Route path="/search" element={<SearchSubscribersPage/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
