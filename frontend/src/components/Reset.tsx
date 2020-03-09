import React from 'react'
import { mutate } from 'swr'
import * as api from '../api/api'
import { resetReports } from '../api/api'

const Reset = () => {
  const resetHandle = async () => {
    return mutate(api.paths.reports, resetReports)
  }
  return <button onClick={resetHandle}>Reset</button>
}

export default Reset
