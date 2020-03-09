import React from 'react'
import { ReportModel, ReportsModel } from '../model/model'
import * as api from '../api/api'
import { updateReport } from '../api/api'
import { mutate } from 'swr'

interface ReportProps {
  report: ReportModel
}

const replaceReport = (
  reports: ReportsModel,
  newReport: ReportModel
): ReportsModel =>
  reports.map(report => (report._id === newReport._id ? newReport : report))

const Report: React.FC<ReportProps> = ({ report }) => {
  const { _id } = report
  const resolve = async () => {
    return mutate(api.paths.reports, async (data: { data: ReportsModel }) => {
      const { data: newReport } = await updateReport({
        _id,
        state: 'resolved'
      })
      return {
        data: replaceReport(data.data, newReport)
      }
    })
  }
  const block = async () => {
    return mutate(api.paths.reports, async (data: { data: ReportsModel }) => {
      const { data: newReport } = await updateReport({ _id, state: 'blocked' })
      return {
        data: replaceReport(data.data, newReport)
      }
    })
  }
  return (
    <div>
      <div>{JSON.stringify(report, null, 2)}</div>
      <button onClick={block}>Block</button>
      <button onClick={resolve}>Resolve</button>
    </div>
  )
}

export default Report
