const devBaseURL = 'http://49.234.28.156:9001'
const proBaseURL = 'http://49.234.28.156:9001'
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 5000
