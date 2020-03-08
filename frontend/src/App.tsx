import React from 'react'
import { SWRConfig } from 'swr'
import { fetcher } from './api/fetcher'
import Reports from './components/Reports'

function App() {
  return (
    <div>
      <SWRConfig
        value={{
          refreshInterval: 20000,
          fetcher
        }}
      >
        <Reports />
      </SWRConfig>
    </div>
  )
}

export default App
