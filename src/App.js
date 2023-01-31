import './App.css';

import Navbar from './components/navbar'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Home from './pages/home/home';
import Blogpost from './pages/blogpost/blogpost'
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Write from './pages/write/write'
import Footer from './components/footer'
import NotFound from './pages/notfound/notFound'

import {Route, Routes} from "react-router-dom"

function App() {

  const user = true;

  return (
    <div className='app'>
    
    {
    user 
    
    ? <>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/post/:id" element={ <Blogpost />} />
      <Route path="/about" element={ <About />} />
      <Route path="/contact" element={ <Contact />} />
      <Route path="/write" element={ <Write />} />
      <Route path="/login" element={ <Login />} />
      <Route path="/register" element={ <Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
    
    : <Login />
    }

    </div>
  );
}

export default App;
