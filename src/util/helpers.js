export function mergeToNewObject(firstObject, ...args) {
  return Object.assign({}, firstObject, ...args)
}
