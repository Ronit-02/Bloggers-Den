import './App.css';

import Navbar from './components/navbar'
import Login from './pages/login/login'
import Home from './pages/home/home';
import Blogpost from './pages/blogpost/blogpost'
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Write from './pages/write/write'
import Footer from './components/footer'
import NotFound from './pages/notfound/notFound'

import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className='app'>
    <Navbar />

    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/post/:id" element={ <Blogpost />} />
      <Route path="/about" element={ <About />} />
      <Route path="/contact" element={ <Contact />} />
      <Route path="/write" element={ <Write />} />
      <Route path="/login" element={ <Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />
    </div>
  );
}

export default App;
