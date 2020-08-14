/**
 * 生成guid
 */
export const guid = (): string => {
  const S4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  )
}



/**
 * 用于需要在get请求中传递数组的情况
 */

export function paramsSerializer(params = {}) {
  const paramArr: string[] = []
  let key: string
  let value: any
  for ([key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      value.forEach((item) =>
        paramArr.push(`${encodeURIComponent(key)}=${encodeURIComponent(item)}`)
      )
    } else {
      paramArr.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    }
  }
  return paramArr.join('&')
}

/**
 * 将数值使用逗号隔开，一般用于金额的输入
 */
export const getCommaNumber = (value: any) => {
  const list = value.toString().split('.')
  const prefix = list[0].charAt(0) === '-' ? '-' : ''
  let num = prefix ? list[0].slice(1) : list[0]
  let result = ''
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`
    num = num.slice(0, num.length - 3)
  }
  if (num) {
    result = num + result
  }
  const listSecond = list[1] ? '.' + list[1] : ''
  return `${prefix}${result}${listSecond}`
}

/**
 * 将对象转换成style字符串,用于内联样式
 */
export const objectToString = (obj?: object) => {
  if (obj) {
    let objStr = ''
    Object.keys(obj).forEach((key) => {
      objStr += `${key}:${obj[key]};`
    })
    return objStr
  }
  return ''
}
