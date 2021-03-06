import React from 'react'
import { SWRConfig } from 'swr'
import Reports from './components/Reports'
import { fetcherApi } from './api/fetcherApi'
import Reset from './components/Reset'

function App() {
  return (
    <div>
      <SWRConfig
        value={{
          refreshInterval: 60000,
          fetcher: fetcherApi
        }}
      >
        <Reset />
        <a href={`${process.env.REACT_APP_API_URL}/source.zip`}>Details</a>
        <Reports />
      </SWRConfig>
    </div>
  )
}

export default App
