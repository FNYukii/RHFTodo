import type { AchievementListFormValues } from '../../features/AchievementSection/AchievementListFormValues'
import type { MemoFormValues } from '../../features/MemoSection/MemoSection'
import type { TodoListFormValues } from '../../features/TodoSection/TodoListFormValues'

interface StorageMap {
  memoFormValues: MemoFormValues
  todoListFormValues: TodoListFormValues
  achievementListFormValues: AchievementListFormValues
}

type StorageKey = keyof StorageMap

/**
 * LocalStorageにデータを保存
 * アプリ上の複数の型に対応。dataの内容はkeyで指定したものである必要あり
 * @param key
 * @param data
 */
export const setToLocalStorage = <T extends StorageKey>(
  key: T,
  data: StorageMap[T],
) => {
  const memoJsonStr = JSON.stringify(data)
  localStorage.setItem(key, memoJsonStr)
}

/**
 * LocalStorageからデータを取得
 * 戻り値の型はkeyと合致していて安全。
 * @param key
 * @returns
 */
export const getFromLocalStorage = <T extends StorageKey>(
  key: T,
): StorageMap[T] | undefined => {
  const jsonStr = localStorage.getItem(key)
  if (!jsonStr) return undefined

  try {
    return JSON.parse(jsonStr) as StorageMap[T]
  } catch {
    return undefined
  }
}
