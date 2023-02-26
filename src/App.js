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
import Social from './components/social';

import {Route, Routes} from "react-router-dom"
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(true);
  const [theme, setTheme] = useState("light");

  function toggleUser(){
    setUser(!user);
  }

  const toggleTheme = () => {
    if (theme === 'light') {
        setTheme("dark")
    }
    else {
        setTheme("light")
    }
  };

  return (
    <div id={`${theme}`}>
    
      { user 

      ? <>
      <Navbar toggleUser={toggleUser} toggleTheme={toggleTheme}/>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/write" element={ <Write />} />
        <Route path="/blogpage/:id" element={ <BlogPage />} />
        <Route path="/news" element={ <News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Social />
      </>
      
      : 
      <Routes>
        <Route path="/" element={ <Login toggleUser={toggleUser}/>} />
        <Route path="/register" element={ <Register />} />
      </Routes>
      }

    </div>
  );
}

export default App;
