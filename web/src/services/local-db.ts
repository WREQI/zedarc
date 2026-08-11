const databaseName = 'zedarc-local'
const version = 1
const storeName = 'state'

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') return reject(new Error('IndexedDB 不可用'))
    const request = indexedDB.open(databaseName, version)
    request.onupgradeneeded = () => { if (!request.result.objectStoreNames.contains(storeName)) request.result.createObjectStore(storeName) }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error ?? new Error('IndexedDB 打开失败'))
  })
}

export async function setLocalRecord<T>(key: string, value: T) {
  const database = await openDatabase()
  await new Promise<void>((resolve, reject) => { const request = database.transaction(storeName, 'readwrite').objectStore(storeName).put(value, key); request.onsuccess = () => resolve(); request.onerror = () => reject(request.error ?? new Error('IndexedDB 写入失败')) })
  database.close()
}
export async function getLocalRecord<T>(key: string): Promise<T | undefined> {
  const database = await openDatabase()
  const value = await new Promise<T | undefined>((resolve, reject) => { const request = database.transaction(storeName, 'readonly').objectStore(storeName).get(key); request.onsuccess = () => resolve(request.result as T | undefined); request.onerror = () => reject(request.error ?? new Error('IndexedDB 读取失败')) })
  database.close(); return value
}
export async function removeLocalRecord(key: string) {
  const database = await openDatabase()
  await new Promise<void>((resolve, reject) => { const request = database.transaction(storeName, 'readwrite').objectStore(storeName).delete(key); request.onsuccess = () => resolve(); request.onerror = () => reject(request.error ?? new Error('IndexedDB 删除失败')) })
  database.close()
}
