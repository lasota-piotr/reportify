export interface ReportModel {
  _id: string
  state: 'open' | 'blocked' | 'resolved'
  type: 'spam'
  createdAt: string
  updatedAt: string
  message?: string
}

export type ReportsModel = ReportModel[]
