export const partial = (fn, ...args) => fn.bind(null, ...args)

export const pipe = (fn1, fn2) => (...args) => {
  return fn2(fn1(...args))
}
 
