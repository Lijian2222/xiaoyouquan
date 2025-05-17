//添加防抖处理
//点赞等操作没有防抖处理，用户可能频繁触发。

export function throttle(fn, delay = 300) {
  let timer = null
  return function(...args) {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}


