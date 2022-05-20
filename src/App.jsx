import Navigation from './components/navigation'
import Header from './components/header'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

const App = () => {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
