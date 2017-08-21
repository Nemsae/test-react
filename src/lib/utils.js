export const partial = (fn, ...args) => fn.bind(null, ...args)

const _pipe = (fn1, fn2) => (...args) => fn2(fn1(...args))

export const pipe = (...fns) => fns.reduce(_pipe)

// export const pipe = (...fns) => fns.reduce((a, c, i) => {
//     // console.log('a: ', a);
//     // console.log('c: ', c);
//     // console.log('i: ', i);
//     return _pipe
// })
