import { type ReactNode } from 'react'

interface ISelect {
  placeholder: string
  value?: SelectItems
  items: SelectItems[]
  onChange: (items: SelectItems) => void
}

interface SelectItems {
  label: ReactNode
  value: string
}

export type { ISelect, SelectItems }