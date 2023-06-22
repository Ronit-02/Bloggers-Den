import './App.css';

import Navbar from './components/navbar.js'
import Login from './pages/login/login.js'
import Register from './pages/login/register.js'
import Home from './pages/home/home.js';
import BlogPage from './pages/blogPage/blogPage.js'
import About from './pages/about/about.js';
import Contact from './pages/contact/contact.js';
import Write from './pages/write/write.js'
import Footer from './components/footer.js'
import NotFound from './components/notFound.js'
// import News from './pages/news/news';
// import Social from './components/social';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import { useContext } from 'react'
import { Context } from './context/Context.js';

function App() {

  const {user} = useContext(Context)
  const [theme, setTheme] = useState("light");

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
      <Navbar theme={theme} toggleTheme={toggleTheme}/>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/write" element={ <Write />} />
        <Route path="/post/:id" element={ <BlogPage />} />
        {/* <Route path="/news" element={ <News />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {/* <Social /> */}
      </>
      
      : 
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/register" element={ <Register />} />
      </Routes>
      }

    </div>
  );
}

export default App;
