import { IToast } from '@/domain/toast/toast';
import { ReactNode } from 'react';

export class ToastMock implements IToast {
  toastContainer: ReactNode = <div></div>
  showToast: (msg: string) => void = (message: string) =>  jest.fn()
}