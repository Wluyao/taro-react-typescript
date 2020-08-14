import Taro from '@tarojs/taro'
import config from '@/config'

interface IFail {
  msg?: string
  code?: number
  [key: string]: any
}

class Request {
  private baseURL = config.domain

  private header = {
    'content-type': 'application/json',
    token: Taro.getStorageSync('token')
  }

  // 设置请求头
  private setHeader = (header: any) => {
    this.header = { ...this.header, ...header }
  }

  private baseReq = async (config: Taro.request.Option) => {
    const response = await Taro.request(config)

    if (response.header['token']) {
      const token = response.header['token']
      this.setHeader({ token })
      Taro.setStorageSync('token', token)
    }

    if (response.data.success) {
      return response.data
    } else {
      const data = {
        ...response.data,
        ...{ msg: response.data.error_text, code: response.data.error_code }
      }

      return Promise.reject(data as IFail)
    }
  }

  public get(url: string, data: any = {}, config: any = {}): Promise<any> {
    return this.baseReq({
      url: this.baseURL + url,
      data,
      method: 'GET',
      header: this.header,
      ...config
    })
  }

  public post(url: string, data: any = {}, config: any = {}): Promise<any> {
    return this.baseReq({
      url: this.baseURL + url,
      data,
      method: 'POST',
      header: this.header,
      ...config
    })
  }
}

export default new Request()
