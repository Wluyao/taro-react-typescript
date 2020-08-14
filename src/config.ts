/*
 *  应用配置
 */

// 开发配置
const CONFIG_DEV = {
  domain: 'http://www.abc.com'
}

// 生产配置
const CONFIG_PRO = {
  domain: 'http://www.cba.com'
}

const CONFIG = process.env.NODE_ENV === 'development' ? CONFIG_DEV : CONFIG_PRO
export default CONFIG
