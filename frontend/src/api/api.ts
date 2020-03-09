import { ReportModel } from '../model/model'
import { fetcher } from './fetcher'

export const paths = {
  reports: '/api/report',
  report: '/api/report'
}

export const updateReport = async (
  params: Partial<ReportModel> & { _id: string }
): Promise<{ data: ReportModel }> => {
  const { _id, ...rest } = params
  return fetcher(`${paths.report}/${params._id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(rest)
  })
}
