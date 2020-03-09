import { ReportModel } from '../model/model'
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
    mode: 'cors',
    body: JSON.stringify(rest)
  })
}
