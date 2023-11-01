import { IToast } from '@/domain/toast/toast';
import { ReactNode } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export class ToastAdapter implements IToast {
  toastContainer: ReactNode = <Toaster
    position="top-center"
    reverseOrder={false}
  />
  showToast: (msg: string) => void = (message: string) =>  toast(message)
}
