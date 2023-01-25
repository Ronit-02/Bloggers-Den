import '../../styles/home.css'

import Header from './header'
import Footer from '../../components/footer'
import Posts from './posts' 
import Sidebar from './sidebar'

export default function Home() {
  return (
    <div className='home'>
        <Header />
        <div className='home__content'>
          <Posts />
          <Sidebar />
        </div>
        <Footer />
    </div>
  )
}
