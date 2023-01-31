import '../../styles/home.css'

import Header from './header'
import Posts from './posts' 
// import Sidebar from './sidebar'


export default function Home() {
  return (
    <div className='home__content'>
      <Header />
      <Posts />
      {/* <Sidebar /> */}
    </div>
  )
}
