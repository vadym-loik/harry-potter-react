import './App.scss';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Hero />

          <Routes></Routes>

          <main className="main"></main>
          <footer className="footer"></footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
