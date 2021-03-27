import React from 'react'

const Nav = () => {
  const categories = [
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
  ]

  const categorySelected = name => {
    console.log(`${name} clicked`)
  }

  return (
    <header className='ml-4'>
      <h2 style={{ display: 'inline-block' }}>
        <a data-testid='link' href='/'>
          <span role='img' aria-label='camera'>
            {' '}
            📸
          </span>{' '}
          Oh Snap!
        </a>
      </h2>
      <nav style={{ display: 'inline-block' }}>
        <ul className='flex-row'>
          <li className='mx-2'>
            <a data-testid='about' href='#about'>
              About me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map(category => (
            <li className='mx-1' key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
