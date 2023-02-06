import './App.css';

import Navbar from './components/navbar'
import Login from './pages/login/login'
import Register from './pages/login/register'
import Home from './pages/home/home';
import BlogPage from './pages/blogPage/blogPage'
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Write from './pages/write/write'
import News from './pages/news/news';
import Footer from './components/footer'
import NotFound from './components/notFound'

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
      <Route path="/blogpage/:id" element={ <BlogPage />} />
      <Route path="/about" element={ <About />} />
      <Route path="/contact" element={ <Contact />} />
      <Route path="/write" element={ <Write />} />
      <Route path="/login" element={ <Login />} />
      <Route path="/register" element={ <Register />} />
      <Route path="/news" element={ <News />} />
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
