import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import About from './views/About'
import Gallery from './views/Gallery'
import ContactForm from './views/ContactForm'
import { capitalizeFirstLetter } from './utils/helpers'

function App () {
  const [categories] = useState([
    {
      name: 'commercial',
      description:
        'Photos of grocery stores, food trucks, and other commercial projects'
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    {
      name: 'landscape',
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature'
    }
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0])

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name)
  }, [currentCategory])

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <main>
        <div>
          <ContactForm />
          <Gallery currentCategory={currentCategory} />
          <About />
        </div>
      </main>
    </div>
  )
}

export default App
