import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=info|extracts%7Cpageimages&inprop=url&generator=random&formatversion=2&exchars=170&exintro=1&explaintext=1&piprop=original&grnnamespace=0&grnlimit=1`)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        return response.json()
      })
      .then(data => setData(data))
      .catch(err => {
        console.error('Wiki fetch failed', err)
        setError(err.message)
      })
  }, [])

  if (error) {
    return (
      <div className="App">
        <p>Error loading article: {error}</p>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="App">
        <p>Loading...</p>
      </div>
    )
  }

  const pages = data?.query?.pages
  const pageData = pages && pages[Object.keys(pages)[0]]

  if (!pageData) {
    return (
      <div className="App">
        <p>No page data returned.</p>
      </div>
    )
  }

  const pageTitle = pageData.title
  const pageExtract = pageData.extract
  const pageUrl = pageData.fullurl
  const pageImg = pageData.original?.source || ''

  return (
    <div className="App">
      <img src={pageImg} className={pageImg ? `wiki-img` : `hidden`} />
      <div className="wiki-text">
        <h1>
          <a href={pageUrl} target="_blank" rel="noreferrer">
            {pageTitle}
          </a>
        </h1>
        <p>{pageExtract}</p>
      </div>
    </div>
  )
}

export default App