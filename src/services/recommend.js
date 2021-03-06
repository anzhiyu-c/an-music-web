import request from './request'

export function getTopBanners() {
  return request({
    url: '/banner',
  })
}

export function getHotRecommends(limit) {
  return request({
    url: '/personalized',
    params: {
      limit,
    },
  })
}

export function getNewAlbums(limit) {
  return request({
    url: '/album/newest',
    params: {
      limit,
    },
  })
}

export function getTopList(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id,
    },
  })
}

export function getHotSinger(limit) {
  return request({
    url: '/top/artists',
    params: {
      limit,
    },
  })
}

export function getHotRadio() {
  return request({
    url: '/dj/recommend',
  })
}

export function getArtistList(limit, cat) {
  return request({
    url: '/artist/list',
    params: {
      cat,
      limit,
    },
  })
}
