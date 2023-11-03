import { GetStorage, SetStorage } from '@/domain/cache';

export interface IOrder {
  cache: GetStorage & SetStorage
}