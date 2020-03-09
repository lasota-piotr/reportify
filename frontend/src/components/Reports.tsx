import React from 'react'
import useSWR from 'swr'
import { ReportsModel } from '../model/model'
import * as api from '../api/api'
import Report from './Report'

const Reports = () => {
  const { data, error } = useSWR<{ data: ReportsModel }>(api.paths.reports)
  if (error) {
    return <div>error :(</div>
  }
  if (!data) {
    return <div>loading</div>
  }
  const reports = data.data || {}
  return (
    <ul>
      {reports.map(report => (
        <li key={report._id}>
          <Report report={report} />
        </li>
      ))}
    </ul>
  )
}

export default Reports
