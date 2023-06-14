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
// import Social from './components/social';
import { useContext, useState } from 'react';
import { Route, Routes } from "react-router-dom"
import { Context } from './context/Context';

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
    
      {/* { user 

      ? <> */}
      <Navbar theme={theme} toggleTheme={toggleTheme}/>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/write" element={ <Write />} />
        <Route path="/post/:id" element={ <BlogPage />} />
        <Route path="/news" element={ <News />} />
        {/* <Route path="/login" element={ <Login />} /> */}
        {/* <Route path="/register" element={ <Register /> } /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {/* <Social /> */}
      {/* </>
      
      : 
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/register" element={ <Register />} />
      </Routes>
      } */}

    </div>
  );
}

export default App;
