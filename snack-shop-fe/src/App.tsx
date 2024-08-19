import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasketView from './views/Basket';
import Orders from './views/Orders';
import Snacks from './views/Snacks';
import { Header } from './Components/Header';
import { NavigationBar } from './Components/NavigationBar';

export default function App() {
  return (
    <>
      <Header headingText='Snack Shop' />
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Snacks />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/basket' element={<BasketView />} />
          <Route path='*' element={<>Not Found</>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}