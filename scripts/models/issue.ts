import { DataSet } from '../core'

type IssueProps = {
  number: number
  labels: string[]
  data: DataSet
}

export class Issue {
  number: number
  labels: string[]
  data: DataSet

  constructor({ number, labels, data }: IssueProps) {
    this.number = number
    this.labels = labels
    this.data = data
  }
}
