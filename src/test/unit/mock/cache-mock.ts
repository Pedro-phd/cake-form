import { type GetStorage, type SetStorage } from '@/domain/cache'

export class CacheMock implements SetStorage, GetStorage {
  private cache: any = {}
  set (key: string, value: object): void {
    this.cache = this.cache[key] = value;
  }

  get (key: string): any {
    return this.cache[key]
  }
}