import request from '@/utils/request'

/**
 * 登陆
 */
const login = async (params: any): Promise<{}> => {
  const res = await request.post('/api/login', params)

  return {}
}

export default { login }
