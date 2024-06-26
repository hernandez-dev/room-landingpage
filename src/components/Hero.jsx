import { useState, useEffect, useRef } from "react"

// hero sections
const sections = [
  {
    id: 1,
    heading: "Discover innovative ways to decorate",
    description: "We provide unmatched quality, comfort and style for property owners across the country. Our experts combine form and function in bringing yout vision to life. Create a room in yout own style with our collection and make your property a relection of you and what you love.",
    image: "/images/desktop-image-hero-1.jpg"
  },
  {
    id: 2,
    heading: "We are available all across the globe",
    description: "With stores all over the world, it's easy fot you to find futniture fot your home or place of bussines. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any question? Don't hesitate to contact us today.",
    image: "/images/desktop-image-hero-2.jpg"
  },
  {
    id: 3,
    heading: "Manufactured with the best materials",
    description: "Our modern forniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    image: "/images/desktop-image-hero-3.jpg"
  }
]

// components
import Navigation from "./Navigation.jsx"

// SlideButton
function SlideButton({
  buttonRef,
  action,
  disabled,
  setCurrentSection,
  children
}) {
  return(
    <button
      ref={buttonRef}
      disabled={disabled}
      className="flex items-center justify-center w-[4.5rem] h-[4.5rem] transition duration-100 hover:bg-very-dark-gray desktop:w-auto desktop:flex-1"
      onClick={() => action == "prev" ? setCurrentSection(prev => prev - 1) : setCurrentSection(prev => prev + 1)}
    >
      {children}
    </button>
  )
}

export default function Hero({ links }) {
  // references
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)

  // currentSection
  const [currentSection, setCurrentSection] = useState(0)
  const section = sections[currentSection]

  // handleKeyup
  function handleKeyup(e) {
    const keyCode = e.keyCode
    if (keyCode == 39) {
      nextButtonRef.current.click()
    } else if (keyCode == 37) {
      prevButtonRef.current.click()
    } else {
      return
    }
  }

  // mounted
  useEffect(() => {
    document.addEventListener("keyup", handleKeyup)
    return () => document.removeEventListener("keyup", handleKeyup)
  }, [])

  return(
    <main className="desktop:grid desktop:grid-cols-12">
      <div className="relative col-span-8">
        <img src={section.image} alt="hero section slide image" className="block w-full" />
        <Navigation links={links} />
      </div>
      <div className="relative flex flex-col desktop:col-span-4">
        <div className="flex flex-1">
          <div className="m-auto px-10 py-14">
            <h1 className="font-bold text-3xl text-very-dark-gray desktop:text-5xl">
              {section.heading}
            </h1>
            <p className="mt-5 text-lg text-dark-gray leading-8">
              {section.description}
            </p>
            <a href="#" className="outline-none inline-flex items-center mt-6 font-semibold text-very-dark-gray uppercase tracking-[.5rem] leading-none transition duration-100 hover:text-dark-gray focus:text-dark-gray">
              shop now
              <img src="/images/icon-arrow.svg" alt="link arrow" className="flex ml-4" />
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-full z-10 desktop:static desktop:-translate-y-0 desktop:grid desktop:grid-cols-4">
          <div className="flex col-span-1 bg-black">
            <SlideButton buttonRef={prevButtonRef} action="prev" disabled={currentSection === 0} setCurrentSection={setCurrentSection}>
              <img src="/images/icon-angle-left.svg" alt="left angle icon" />
            </SlideButton>
            <SlideButton buttonRef={nextButtonRef} action="next" disabled={currentSection === (sections.length - 1)} setCurrentSection={setCurrentSection}>
              <img src="/images/icon-angle-right.svg" alt="right angle icon" />
            </SlideButton>
          </div>
        </div>
      </div>
    </main>
  )
}
