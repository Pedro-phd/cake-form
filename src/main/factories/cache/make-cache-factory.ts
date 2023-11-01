import { LocalStorageAdapter } from '@/infra/adpaters/cache/cache-adapter'

export const makeLocalStorageAdapter = (): LocalStorageAdapter => new LocalStorageAdapter()
