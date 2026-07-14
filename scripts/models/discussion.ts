import { DataSet } from '../core'

type DiscussionProps = {
  number: number
  category: string
  data: DataSet
}

export class Discussion {
  number: number
  category: string
  data: DataSet

  constructor({ number, category, data }: DiscussionProps) {
    this.number = number
    this.category = category
    this.data = data
  }
}
