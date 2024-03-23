// components
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import MobileNavigation from "./components/MobileNavigation.jsx"

// links
const links = [
  {
    id: 1,
    name: "home",
    to: ""
  },
  {
    id: 2,
    name: "shop",
    to: ""
  },
  {
    id: 3,
    name: "about",
    to: ""
  },
  {
    id: 4,
    name: "contact",
    to: ""
  }
]

function App() {
  return (
    <>
      <Hero links={links} />
      <About />
      <MobileNavigation links={links} />
    </>
  )
}

export default App
