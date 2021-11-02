const devBaseURL = 'http://47.110.157.196:9001'
const proBaseURL = 'http://47.110.157.196:9001'
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 5000
