const devBaseURL = 'http://music-api.anzhiy.cn/'
const proBaseURL = 'http://music-api.anzhiy.cn/'
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 5000
