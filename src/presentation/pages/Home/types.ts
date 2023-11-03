import { GetStorage, SetStorage } from '@/domain/cache';
import { IToast } from '@/domain/toast/toast';

export interface IHome {
  cache: GetStorage & SetStorage
  toast: IToast
}