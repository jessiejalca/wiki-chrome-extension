import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&generator=random&formatversion=2&exchars=200&exintro=1&explaintext=1&grnnamespace=0&grnlimit=1`)
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  if (data) {
    const pages = data.query.pages
    const pageData = pages[Object.keys(pages)[0]]
    const pageTitle = pageData.title
    const pageExtract = pageData.extract
    console.log(pageData)
    
    return (
      <div className="App">
        <h1>{pageTitle}</h1>
        <p>{pageExtract}</p>
      </div>
    )
  }
}

export default App