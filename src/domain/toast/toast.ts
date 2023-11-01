import { type ReactNode } from 'react'

export interface IToast {
  toastContainer: ReactNode
  showToast: (msg: string) => void
}
