import React from 'react'
import { SWRConfig } from 'swr'
import Reports from './components/Reports'
import { fetcher } from './api/fetcher'

function App() {
  return (
    <div>
      <SWRConfig
        value={{
          refreshInterval: 60000,
          fetcher
        }}
      >
        <Reports />
      </SWRConfig>
    </div>
  )
}

export default App
