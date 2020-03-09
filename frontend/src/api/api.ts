import { ReportModel, ReportsModel } from '../model/model'
import { fetcherApi } from './fetcherApi'

export const paths = {
  reports: '/api/report',
  report: '/api/report'
}

export const updateReport = async (
  params: Partial<ReportModel> & { _id: string }
): Promise<{ data: ReportModel }> => {
  const { _id, ...rest } = params
  return fetcherApi(`${paths.report}/${params._id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(rest)
  })
}

export const resetReports = async (): Promise<{ data: ReportsModel }> => {
  return fetcherApi(`${paths.report}/reset`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
}
