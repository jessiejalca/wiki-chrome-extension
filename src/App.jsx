import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// wiki media api: list=random&rnlimit=1

function App() {
  
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=random&formatversion=2&rnnamespace=0`
    )
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  console.log(data)

  if (data) 
    return (
      <pre>{JSON.stringify(data, null, 2)}</pre>
    )

  // const WIKI_TITLE = "Hackathon"
  // const WIKI_DESCRIPTION = `A hackathon (also known as a hack day, hackfest, datathon or codefest; a portmanteau of hacking and marathon) is an event where people engage in rapid and collaborative engineering over a relatively short period of time such as 24 or 48 hours.`

  // return (
  //   <div className="App">
  //     <h1>{WIKI_TITLE}</h1>
  //     <p>{WIKI_DESCRIPTION}</p>
  //   </div>
  // )
}

export default App