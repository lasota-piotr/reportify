import React from 'react'
import { ReportModel } from '../model/model'

interface ReportProps {
  report: ReportModel
}

const Report: React.FC<ReportProps> = ({ report }) => {
  return <div>{JSON.stringify(report, null, 2)}</div>
}

export default Report
