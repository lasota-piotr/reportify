import React from 'react'
import { SWRConfig } from 'swr'
import Reports from './components/Reports'
import { fetcherApi } from './api/fetcherApi'

function App() {
  return (
    <div>
      <SWRConfig
        value={{
          refreshInterval: 60000,
          fetcher: fetcherApi
        }}
      >
        <Reports />
      </SWRConfig>
    </div>
  )
}

export default App
