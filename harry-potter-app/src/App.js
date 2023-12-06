import './App.scss';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gryffindor from './Containers/Gryffindor/Gryffindor';
import Ravenclaw from './Containers/Ravenclaw/Ravenclaw';
import Slytherin from './Containers/Slytherin/Slytherin';
import Hufflepuff from './Containers/Hufflepuff/Hufflepuff';
import Home from './Containers/HomePage/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />

          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/gryffindor"
              element={<Gryffindor />}
            />
            <Route
              path="/ravenclaw"
              element={<Ravenclaw />}
            />
            <Route
              path="/slytherin"
              element={<Slytherin />}
            />
            <Route
              path="/hufflepuff"
              element={<Hufflepuff />}
            />
          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
