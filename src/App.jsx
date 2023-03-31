
import { useEffect, useState } from 'react'
import './App.css'
import Categories from "./components/Categories"
import Display from './components/Display';



function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category)
    document.title = category;
  }

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div className="App">

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`} >
        <h1 className='title'>Ecommerce</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? 'line1' : ''}`} />
          <div className={`line ${isMenuOpen ? 'line2' : ''}`} />
          <div className={`line ${isMenuOpen ? 'line3' : ''}`} />
        </button>
        <Categories handleSelectedCategory={handleSelectedCategory} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
      <div className="display">
        <Display category={selectedCategory} />
      </div>
    </div>
  )
}

export default App
