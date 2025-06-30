import Cars from '../pages/Cars'
import About from './About'
import Brands from './Brands'
import Faq from './Faq'
import Footer from './Footer'
import Futures from './Futures'
import Hero from './Hero'

const HomeMain = () => {
  return (
    <div className=''>
      <Hero/>
      <About/>
      <Brands/>
      <Futures/>
      <Cars/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default HomeMain