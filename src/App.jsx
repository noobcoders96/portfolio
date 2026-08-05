import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SkillsRows from './components/SkillsRows'
import ExperienceEpisodes from './components/ExperienceEpisodes'
import ProjectsRow from './components/ProjectsRow'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-surface min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <SkillsRows />
      <ExperienceEpisodes />
      <ProjectsRow />
      <ContactForm />
      <Footer />
    </div>
  )
}
