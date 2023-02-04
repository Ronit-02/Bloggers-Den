import '../../styles/home.css'

import Header from './header'
import Hero from './hero' 
// import Sidebar from './sidebar'


export default function Home() {
  return (
    <div className='home__content'>
      <Header />
      <Hero />
      {/* <Sidebar /> */}
    </div>
  )
}
