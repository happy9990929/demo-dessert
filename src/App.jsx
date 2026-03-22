
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import ConceptSection from './components/ConceptSection'
import FeaturesStrip from './components/FeaturesStrip'
import ExperienceSection from './components/ExperienceSection'

import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">

      <Navbar />
      <main>
        <HeroBanner />
        <ConceptSection />
        <FeaturesStrip />
        <ExperienceSection />

      </main>
      <Footer />
    </div>
  )
}

export default App
