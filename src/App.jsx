import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&generator=random&prop=revisions|images&rvprop=content&grnnamespace=0&grnlimit=1`)
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  if (data) {
    const pages = data.query.pages
    const pageData = pages[Object.keys(pages)[0]]
    const pageTitle = pageData.title
    console.log(pageData)
    
    return (
      <div className="App">
        <h1>{pageTitle}</h1>
      </div>
    )
  }
}

export default App