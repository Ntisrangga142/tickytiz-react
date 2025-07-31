import HomeMovies from '../molecules/HomeMovies'
import ChooseUs from '../organism/ChooseUs'
import Header from '../organism/Header'
import Hero from '../organism/Hero'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ChooseUs />
      <HomeMovies />

    </>
  )
}

export default Home