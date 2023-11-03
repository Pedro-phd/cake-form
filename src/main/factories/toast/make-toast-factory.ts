import { IToast } from '@/domain/toast/toast'
import { ToastAdapter } from '@/infra/adpaters/toast/toast.adapter'

export const makeToast = (): IToast => {
  return new ToastAdapter()
}
