import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=info|extracts%7Cpageimages&inprop=url&generator=random&formatversion=2&exchars=170&exintro=1&explaintext=1&piprop=original&grnnamespace=0&grnlimit=1`)
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  if (data) {
    const pages = data.query.pages
    const pageData = pages[Object.keys(pages)[0]]
    const pageTitle = pageData.title
    const pageExtract = pageData.extract
    const pageUrl = pageData.fullurl
    let pageImg = ""
    if (pageData.original) {
      pageImg = pageData.original.source
      console.log(pageImg)
    }
    console.log(pageData)
    
    return (
      <div className="App">
        <img src={pageImg} className={pageImg ? `wiki-img` : `hidden`} />
        <div className="wiki-text">
          <h1>{pageTitle}</h1>
          <p>{pageExtract}</p>
        </div>
      </div>
    )
  }
}

export default App